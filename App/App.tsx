import React from 'react';
import AppNavigation from './Navigations';
import {Provider} from 'react-redux';
import store from './Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
