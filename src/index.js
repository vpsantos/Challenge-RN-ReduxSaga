import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';

import Routes from 'routes';
import ErrorBox from 'components/ErrorBox';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ErrorBox />
    </Fragment>
  </Provider>
);

export default App;
