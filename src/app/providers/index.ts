import compose from 'compose-function';

import withAuth from './withAuth';
import withMUITheme from './withMUITheme';
import withStore from './withStore';

export const withProviders = compose(withStore, withMUITheme, withAuth);
