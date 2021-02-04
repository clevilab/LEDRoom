import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

import EntryScreen from './src/screens/entry';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EntryScreen />
      </Provider>
    );
  }
}
export default App;