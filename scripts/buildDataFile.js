const dayjs = require('dayjs');
const fs = require('fs');
const { compose, find, isEmpty, propEq, uniqBy } = require('ramda');

const ROOT_DATA_PATH = `${__dirname}/../companies.json`;
const PUBLIC_DATA_PATH = `${__dirname}/../public/data.json`;

function importRootData() {
  if (fs.existsSync(ROOT_DATA_PATH)) {
    return JSON.parse(fs.readFileSync(ROOT_DATA_PATH, 'utf8'));
  }
  return [];
}

function importPublicData() {
  if (fs.existsSync(PUBLIC_DATA_PATH)) {
    return JSON.parse(fs.readFileSync(PUBLIC_DATA_PATH, 'utf8'));
  }
  return [];
}

// root data file is re-written without datestamps
function writeRootData(data) {
  const rootData = data.reduce((acc, curr) => {
    const jobs =
      curr.jobs && curr.jobs.map(({ title, url }) => ({ title, url }));
    return acc.concat({ ...curr, jobs });
  }, []);

  fs.writeFileSync(ROOT_DATA_PATH, JSON.stringify(rootData));

  return data;
}

// public data file is written with datestamps
function writePublicData(data) {
  fs.writeFileSync(PUBLIC_DATA_PATH, JSON.stringify(data));

  return data;
}

// any job originally posted more than 30 days ago is expired
function isJobExpired({ addedAt, title }) {
  return dayjs(addedAt)
    .add(30, 'day')
    .isBefore(dayjs());
}

// any expired jobs are removed from the root file
function removeExpiredJobs(data) {
  return data.filter(job => !isJobExpired(job));
}

// any new jobs are datestamped
function timestampNewJobs(data) {
  return data.map(job => {
    if (job.addedAt) {
      return job;
    }
    return { ...job, addedAt: dayjs().toISOString() };
  });
}

// process the datestamped jobs in the data
function updateJobs(rootJobs = [], pubJobs = []) {
  return compose(
    removeExpiredJobs,
    timestampNewJobs,
  )(uniqBy(job => job.title, [...pubJobs, ...rootJobs]));
}

// create a new data object
function buildData(rootData, publicData) {
  return rootData.reduce((acc, rootCompany) => {
    // FIXME: this is a potential bottleneck on large files.
    // If speed becomes an issue, look for optimizations here.
    const publicCompany =
      find(propEq('companyName', rootCompany.companyName))(publicData) || {};
    const company = { ...publicCompany, ...rootCompany };
    const jobs = updateJobs(rootCompany.jobs, publicCompany.jobs);

    if (isEmpty(jobs)) {
      delete company.jobs;
    } else {
      company.jobs = jobs;
    }

    return acc.concat(company);
  }, []);
}

(function buildDataFile() {
  const rootData = importRootData();
  const publicData = importPublicData();

  compose(
    writeRootData,
    writePublicData,
  )(buildData(rootData, publicData));
})();
