import createBuildStyledComponentFactory from './createBuildStyledComponentFactory';

import withModifiersProperty from './middleware/withModifiersProperty';
import withReactStatics from './middleware/withReactStatics';

const buildStyledComponent = createBuildStyledComponentFactory([
  withModifiersProperty,
  withReactStatics,
]);

export default buildStyledComponent;
