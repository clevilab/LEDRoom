import React, {Component} from 'react';

import LoginScreen from "./src/screens/login";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  render() {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  
});

export default App;
