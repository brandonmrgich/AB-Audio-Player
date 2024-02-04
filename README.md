# AB-Audio-Player | Mastering showcase
<div id="top"></div>

  <p align="center">
    A HTML/CSS/Javascript-only audio player that allows you to toggle between two versions of the same audio file.
    <br />
  </p>
</div>

<h3 align="center"><a href="https://brandonmrgich.github.io/AB-Audio-Player/" target="_blank">VIEW DEMO 🎵</h3>
<p> Player card logic forked from: <h3 align="center"><a href="https://github.com/mattbartley/AB-Audio-Player/" target="_blank"> mattbartley/AB-Audio-Player </p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Getting Started

1. Simply add audio files to the assets folder (HTML supports MP3, WAV, and OGG). The files must have the same duration to work correctly.
2. Update the audioData array located in main.js. Add an object containing the A and B audio sources, songName, and artist. Example for two players:
   ```javascript
   const audioData = [
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard", artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound2-a.mp3", audioB: "./assets/sound2-b.mp3", songName: "Sample Audio", artist: "Sample" },
   ];
   ```
3. There are some caveats with different browsers handling how the audio file is preloaded, muted, etc. Test thoroughly for production use.

<p align="right">(<a href="#top">back to top</a>)</p>

### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

