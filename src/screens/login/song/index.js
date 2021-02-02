import React, { Component } from 'react';
class Song extends Component {
    constructor(name) {
        songName: name
    }

     getSong() {
        return this.songName;
    }

    
}

export default Song;