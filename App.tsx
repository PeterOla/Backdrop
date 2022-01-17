import axios from 'axios';
import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import reduxStore from './store';
import {DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, ThemeProvider} from './theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    axios.defaults.headers.common['x-api-key'] =
      '248ffbb8-dfa6-42ce-9c9d-2783bb66d874';
  }, []);

  const {store, persistor} = reduxStore();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider
            initial={isDarkMode ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
