import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

class MyFavoriteMusicScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }


  detectColors = (image_path) => {
    fetch('http://31.220.56.4:5000/api/v1/color', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'imagen': image_path
      })
    })
      .then((response) => response.json())
      .then((json) => {
        let color1 = JSON.stringify(json[0])
        this.setState({ color: color1 })
        console.log(this.state.color)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  currentlySong = () => {
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + JSON.stringify(this.props.accessToken).replace(/\"/g, "")
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json.item.album.images[0].url).replace(/\"/g, ""));
        this.detectColors(JSON.stringify(json.item.album.images[0].url).replace(/\"/g, ""))
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("AccesToken: " + JSON.stringify(this.props.accessToken).replace(/\"/g, ""));
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>Musica Favorita</Text>
        </View>
        <View>
          <Button onPress={() => this.currentlySong()} title="Cancion Actual" />
        </View>
        <View>
          <Text>{this.state.color}</Text>
        </View>
      </View>
    );
  }
}

export default MyFavoriteMusicScreen;