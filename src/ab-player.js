"use strict";
// // Function to create and initialize audio elements
// function createAudioElement(src: string) {
//   const audio = document.createElement('audio');
//   audio.src = src;
//   audio.preload = 'auto';
//   audio.setAttribute('hidden', 'true');
//   document.body.append(audio);
//   return audio;
// }
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(player) {
        this.player = player;
        this.playIcon = '';
        this.pauseIcon = '';
        this.soundA = this.createAudioElement(player.audioA || '');
        this.soundB = this.createAudioElement(player.audioB || '');
        this.aButton = player.querySelector('.a__button');
        this.bButton = player.querySelector('.b__button');
        this.playButton = player.querySelector('.play__button');
        this.stopButton = player.querySelector('.stop__button');
        this.progressFill = player.querySelector('.progress__fill');
        this.playIcon = '<i class="fa-solid fa-play"></i>';
        this.pauseIcon = '<i class="fa-solid fa-pause"></i>';
        this.soundAReady = false;
        this.soundBReady = false;
        // Add other initialization logic if needed
    }
    AudioPlayer.prototype.createAudioElement = function (src) {
        var audio = document.createElement('audio');
        audio.src = src;
        audio.preload = 'auto';
        audio.setAttribute('hidden', 'true');
        document.body.append(audio);
        return audio;
    };
    AudioPlayer.prototype.audioIsReady = function () {
        if (this.soundAReady && this.soundBReady) {
            console.log('...audio loaded!');
            this.aButton.disabled = false;
            this.playButton.disabled = false;
        }
        else {
            console.log('Audio loading...');
        }
    };
    AudioPlayer.prototype.playPause = function () {
        if (this.soundA.paused && this.soundB.paused) {
            var soundATime = this.soundA.currentTime;
            var soundBTime = this.soundB.currentTime;
            if (soundATime >= soundBTime) {
                this.soundA.play();
                this.bButton.disabled = false;
                this.aButton.disabled = true;
                this.playButton.innerHTML = this.pauseIcon;
            }
            else {
                this.soundB.play();
                this.bButton.disabled = true;
                this.aButton.disabled = false;
                this.playButton.innerHTML = this.pauseIcon;
            }
            this.stopButton.disabled = false;
        }
        else {
            this.playButton.innerHTML = this.playIcon;
            this.soundA.pause();
            this.soundB.pause();
        }
    };
    AudioPlayer.prototype.stopSounds = function () {
        this.playButton.innerHTML = this.playIcon;
        this.aButton.disabled = false;
        this.bButton.disabled = true;
        this.playButton.disabled = false;
        this.stopButton.disabled = true;
        this.soundA.pause();
        this.soundA.currentTime = 0;
        this.soundB.pause();
        this.soundB.currentTime = 0;
    };
    // Add other methods as needed
    AudioPlayer.prototype.initialize = function () {
        // Add your initialization logic
    };
    return AudioPlayer;
}());
// Usage
var players = document.querySelectorAll('.player__wrapper');
players.forEach(function (player) { return new AudioPlayer(player).initialize(); });
//# sourceMappingURL=ab-player.js.map