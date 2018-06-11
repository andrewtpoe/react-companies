import { injectGlobal } from 'styled-components';

function configureGlobalStyles({
  globalStyles: { buildGlobalStyleString },
  ...rest
}) {
  const globalStyles = buildGlobalStyleString(rest);

  injectGlobal([globalStyles]);

  return true;
}

export default configureGlobalStyles;
