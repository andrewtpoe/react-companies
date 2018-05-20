import { compose } from 'lodash/fp';
import { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import builderFinalBuilderFn from './buildFinalBuilderFn';
import buildModifiers from './buildModifiers';

/**
 * A baseline builder function that creates a new styled component with modifiers.
 * @param {string} displayName The meaningful display name for the rendered component
 * @param {function|StyledComponent} builderFn A styled-component builder function, e.g.
 * `styled.div`, or a previously built styled component, e.g `Button`.
 * @param {function} styles A function that returns the css function used to create the
 * styles for the component. The function receives the component's `props` as an argument.
 * @param {object} options Additional options for the builder.
 * @property {object} options.modifiers modifiers for component variations
 * @returns {StyledComponent}
 */
function styledComponentBuilder(
  displayName,
  builderFn,
  styles = () => css``,
  { modifiers = {} } = {},
) {
  const finalBuilderFn = builderFinalBuilderFn(builderFn);
  const finalModifiers = buildModifiers(finalBuilderFn, modifiers);

  return finalBuilderFn`
    ${styles}
    ${applyStyleModifiers(finalModifiers)}
  `;
}

/**
 * A factory that builds a factory with middlewares injected.
 * @param {function} factoryFn should build and return a styled component
 * @returns {function}
 */
export default (factoryFn =>
  /**
   * A middlewares injector.
   * @param {array} middlewares an array of middlewares functions
   * @return {function}
   */
  middlewares =>
    /**
     * Accepts styled component values, and returns the styled component.
     * @param {string} displayName The meaningful display name for the rendered component
     * @param {function|StyledComponent} builderFn A styled-component builder function, e.g.
     * `styled.div`, or a previously built styled component, e.g `Button`.
     * @param {function} styles A function that returns the css function used to create the
     * styles for the component. The function receives the component's `props` as an argument.
     * @param {object} options Additional options for the builder.
     * @return {StyledComponent}
     */
    (displayName, builderFn, styles, options) => {
      // Compose the middleware.
      return compose(
        // Apply the arguments used to build the styled component to each piece of middleware
        middlewares.map(m => m(displayName, builderFn, styles, options)),
      )(factoryFn(displayName, builderFn, styles, options));
    })(
  // Preload the entire factory with the styledComponentBuilder.
  styledComponentBuilder,
);
