import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'app/store';

export default function withStore<P extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<P>,
) {
    return function WithStore(props: P): JSX.Element {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Component {...props} />
                </PersistGate>
            </Provider>
        );
    };
}
