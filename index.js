/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import React from 'react';
import {AppRegistry} from 'react-native';
import Application from './app/index';
import {persistor, store} from './app/data';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

/*
 * This is the root component of our app.
 */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  );
};

/**
 * This needs to match what's found in your app_delegate.m and MainActivity.java.
 */
// const APP_NAME = 'contak';

AppRegistry.registerComponent(appName, () => App);
