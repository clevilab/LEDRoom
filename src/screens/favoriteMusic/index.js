import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const MyFavoriteMusicScreen = ({ accessToken }) => {
  
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
      setColor(json[0])
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const currentlySong = () => {
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + JSON.stringify(accessToken).replace(/\"/g, "")
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json.item.album.images[0].url).replace(/\"/g, ""));
        detectColors(JSON.stringify(json.item.album.images[0].url).replace(/\"/g, ""))
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("AccesToken: " + JSON.stringify(accessToken).replace(/\"/g, ""));
  }
  return (
    <View style={{ flex: 1}}>
      <View>
        <Text>Musica Favorita</Text>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Button onPress={currentlySong} title="Cancion Actual" />
      </View>
    </View>

  );
}

export default MyFavoriteMusicScreen;