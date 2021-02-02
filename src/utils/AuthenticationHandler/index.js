import { authorize, refresh } from 'react-native-app-auth';
import Song from 'LEDRoom/src/screens/login/song'
class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: 'e53db68000a149dcbf5d3356862a8d09',
      clientSecret: '5a26490b3baa465a8132fc069ca0c12f',
      redirectUrl: 'com.ledroom://oauthredirect',
      scopes: [

        'user-read-currently-playing',
        'user-modify-playback-state'
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      //alert(JSON.stringify(result));
  
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {

          Authorization: "Bearer " + JSON.stringify(result.accessToken).replace(/\"/g, "")
        }
      })
        .then((response) => response.json())
        .then((json) => {
          alert(json.item.name);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log("AccesToken: " + JSON.stringify(result.accessToken).replace(/\"/g, ""));
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }


}


const authHandler = new AuthenticationHandler();

export default authHandler;