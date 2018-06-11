import isEmpty from 'lodash.isempty';
import { styleModifierPropTypes } from 'styled-components-modifiers';

import builderFinalBuilderFn from '../buildFinalBuilderFn';
import buildModifiers from '../buildModifiers';

/**
 * Adds the modifiers as a property of the StyledComponent being built.
 * @param {string} displayName - The meaningful display name for the rendered component
 * @param {function|StyledComponent} builderFn - A styled-component builder function, e.g.
 * `styled.div`, or a previously built styled component, e.g `Button`.
 * @param {function} styles - A function that returns the css function used to create the
 * styles for the component. The function receives the component's `props` as an argument.
 * @param {object} options - Additional options for the builder.
 * @property {object} options.modifiers - modifiers for component variations
 * @return {function} the function that updates the styled component being built.
 */
export default function withModifiersProperty(
  displayName,
  builderFn,
  styles,
  { modifiers } = {},
) {
  /**
   * @param  {Component} StyledComponent The styled component being built.
   * @return {Component} The styled component being built.
   */
  return StyledComponent => {
    const finalBuilderFn = builderFinalBuilderFn(builderFn);
    const finalModifiers = buildModifiers(finalBuilderFn, modifiers);

    if (!isEmpty(finalModifiers)) {
      const newStyledComponent = StyledComponent;
      newStyledComponent.modifiers = finalModifiers;
      newStyledComponent.propTypes = {
        ...StyledComponent.propTypes,
        modifiers: styleModifierPropTypes(finalModifiers),
      };
      return newStyledComponent;
    }

    return StyledComponent;
  };
}
