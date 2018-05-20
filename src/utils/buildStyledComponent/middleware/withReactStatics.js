/**
 * Adds meaningful standard React properties (like displayName, defaultProps, propTypes)
 * @param {string} displayName - The meaningful display name for the rendered component
 * @param {function|StyledComponent} builderFn - A styled-component builder function, e.g.
 * `styled.div`, or a previously built styled component, e.g `Button`.
 * @param {function} styles - A function that returns the css function used to create the
 * styles for the component. The function receives the component's `props` as an argument.
 * @param {object} options - Additional options for the builder.
 * @property {string} options.className - used to explicitly set `className` for the component
 * @property {object} options.defaultProps - default property values for the component
 * @property {object} options.propTypes - specification of the prop types for the component
 * @return {function} the function that updates the styled component being built.
 */
export default function withReactStatics(
  displayName,
  builderFn,
  styles,
  { className, defaultProps = {}, propTypes = {} } = {},
) {
  /**
   * @param  {Component} StyledComponent The styled component being built.
   * @return {Component} The styled component being built.
   */
  return StyledComponent => {
    const newStyledComponent = StyledComponent;

    const { className: classNameProp, ...otherDefaultProps } = defaultProps;

    newStyledComponent.defaultProps = {
      ...StyledComponent.defaultProps,
      ...otherDefaultProps,
      className: className || classNameProp || displayName,
    };
    newStyledComponent.displayName = displayName;
    newStyledComponent.propTypes = {
      ...StyledComponent.propTypes,
      ...propTypes,
    };

    return newStyledComponent;
  };
}
