import React, { Component, createContext } from 'react';

import { getRootPath } from 'utils';

const { Provider, Consumer: CompaniesContextConsumer } = createContext();

class CompaniesContextProvider extends Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch(`${getRootPath()}/data.json`)
      .then(response => {
        if (!response.ok) {
          throw response;
        }

        return response.json();
      })
      .then(data => {
        this.saveCompanies(data);
      })
      .catch(err => console.log(err));
  };

  saveCompanies = companies => {
    this.setState({ companies });
  };

  render() {
    return (
      <Provider {...this.props} value={{ companies: this.state.companies }} />
    );
  }
}

export { CompaniesContextProvider, CompaniesContextConsumer };
