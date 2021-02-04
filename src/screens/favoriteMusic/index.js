import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const MyFavoriteMusicScreen = ({ accessToken }) => {
  
    const currentlySong = () => {
        fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {

      Authorization: "Bearer " + JSON.stringify(accessToken).replace(/\"/g, "")
    }
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.item.name);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("AccesToken: " + JSON.stringify(accessToken).replace(/\"/g, ""));
    }
  return(
  <View>
    <Text>Musica Favorita</Text>
    <Button onPress={currentlySong} title="Cancion Actual" />
  </View>
  );
}

export default MyFavoriteMusicScreen;