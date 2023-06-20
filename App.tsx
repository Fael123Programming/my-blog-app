import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { App } from './src/';

const MainApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default MainApp;
