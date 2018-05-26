import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import configureGlobalStyles from './configureGlobalStyles';
import theme from './theme';

export class AppThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      colors: PropTypes.shape({
        base: PropTypes.object.isRequired,
        brand: PropTypes.object.isRequired,
      }).isRequired,
      dimensions: PropTypes.object.isRequired,
      fonts: PropTypes.shape().isRequired,
      globalStyles: PropTypes.shape({
        buildGlobalStyleString: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = { theme };

  state = { RenderComponent: null };

  componentWillMount() {
    this.buildComponent();
  }

  buildComponent = () => {
    const { children, theme } = this.props;

    configureGlobalStyles(theme);

    this.setState({
      RenderComponent: () => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
    });
  };

  render() {
    const { RenderComponent } = this.state;
    return <RenderComponent />;
  }
}

export default AppThemeProvider;
