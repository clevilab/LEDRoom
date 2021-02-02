import React, { Component } from 'react';
import {
    View, Button, Text
} from 'react-native';

import authHandler from "LEDRoom/src/utils/AuthenticationHandler";

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlySong: "hola mundo"
        };
    }
    setCurrentSong(mensaje) {
        this.setState({ currentlySong: mensaje})
      }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <View>
                    <Button onPress={() => authHandler.onLogin()} title="Canción actual" />
                </View>
                <View>
                    <Text style={{fontSize: 20, color: 'blue'}}>{this.state.currentlySong}</Text>
                </View>
            </View>
        );
    }
}

export default LoginScreen;