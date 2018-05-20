import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

function configureGlobalStyles({
  globalStyles: { buildGlobalStyleString },
  ...rest
}) {
  const globalStyles = buildGlobalStyleString(rest);

  injectGlobal([normalize()]);
  injectGlobal([globalStyles]);

  return true;
}

export default configureGlobalStyles;
