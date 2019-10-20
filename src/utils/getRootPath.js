export default function getRootPath() {
  return process.env.NODE_ENV === 'production' &&
    process.env.REACT_APP_ROOT_PATH
    ? process.env.REACT_APP_ROOT_PATH
    : '';
}
