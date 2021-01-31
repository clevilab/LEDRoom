import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';

import authHandler from "LEDRoom/src/utils/AuthenticationHandler";

class LoginScreen extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Button onPress={() => authHandler.onLogin()} title="Press to login"/>
            </View>
        );
    }
}

export default LoginScreen;