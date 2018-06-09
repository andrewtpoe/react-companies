import React, { Component, createContext } from 'react';

const { Provider, Consumer: CompaniesContextConsumer } = createContext();

class CompaniesContextProvider extends Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        this.saveCompanies(data);
      });
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
