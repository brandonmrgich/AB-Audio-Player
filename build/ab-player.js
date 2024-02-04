"use strict";
// Function to create and initialize audio elements
function createAudioElement(src) {
    var audio = document.createElement('audio');
    audio.src = src;
    audio.preload = 'auto';
    audio.setAttribute('hidden', 'true');
    document.body.append(audio);
    return audio;
}
// Function to initialize a player
function initializePlayer(player) {
    var soundA = createAudioElement(player.getAttribute('data-audio-a') || '');
    var soundB = createAudioElement(player.getAttribute('data-audio-b') || '');
    var aButton = player.querySelector('.a__button');
    var bButton = player.querySelector('.b__button');
    var playButton = player.querySelector('.play__button');
    var stopButton = player.querySelector('.stop__button');
    var progressFill = player.querySelector('.progress__fill');
    var playIcon = '<i class="fa-solid fa-play"></i>';
    var pauseIcon = '<i class="fa-solid fa-pause"></i>';
    var soundAReady = false;
    var soundBReady = false;
    // Check if audio elements are ready
    function audioIsReady() {
        if (soundAReady && soundBReady) {
            console.log('...audio loaded!');
            aButton.disabled = false;
            playButton.disabled = false;
        }
        else {
            console.log('Audio loading...');
        }
    }
    soundA.oncanplaythrough = function () {
        if (!soundAReady) {
            soundAReady = true;
            audioIsReady();
        }
    };
    soundB.oncanplaythrough = function () {
        if (!soundBReady) {
            soundBReady = true;
            audioIsReady();
        }
    };
    // Click event on progress bar to seek
    player.querySelector('.progress').addEventListener('click', function (event) {
        var rect = (event.currentTarget).getBoundingClientRect();
        var percentage = (event.clientX - rect.left) / rect.width;
        soundA.currentTime = percentage * (soundA.duration || 0);
        soundB.currentTime = percentage * (soundB.duration || 0);
    });
    // Play/Pause function
    function playPause() {
        if (soundA.paused && soundB.paused) {
            var soundATime = soundA.currentTime;
            var soundBTime = soundB.currentTime;
            if (soundATime >= soundBTime) {
                soundA.play();
                bButton.disabled = false;
                aButton.disabled = true;
                playButton.innerHTML = pauseIcon;
            }
            else {
                soundB.play();
                bButton.disabled = true;
                aButton.disabled = false;
                playButton.innerHTML = pauseIcon;
            }
            stopButton.disabled = false;
        }
        else {
            playButton.innerHTML = playIcon;
            soundA.pause();
            soundB.pause();
        }
    }
    // Button event listeners
    aButton.addEventListener('click', function () {
        pauseAll();
        playButton.innerHTML = pauseIcon;
        aButton.disabled = true;
        bButton.disabled = false;
        stopButton.disabled = false;
        if (soundB.currentTime > 0) {
            soundA.currentTime = soundB.currentTime;
            soundA.play();
            soundB.pause();
        }
        else {
            soundA.play();
            soundB.pause();
        }
    });
    bButton.addEventListener('click', function () {
        pauseAll();
        playButton.innerHTML = pauseIcon;
        bButton.disabled = true;
        aButton.disabled = false;
        stopButton.disabled = false;
        if (soundA.currentTime > 0) {
            soundB.currentTime = soundA.currentTime;
            soundB.play();
            soundA.pause();
        }
        else {
            soundB.play();
        }
    });
    playButton.addEventListener('click', function () {
        var allAudio = document.querySelectorAll('audio');
        var allButtons = document.querySelectorAll('.play__button');
        allAudio.forEach(function (audio) {
            if (audio !== soundA && audio !== soundB) {
                audio.pause();
            }
        });
        allButtons.forEach(function (button) {
            if (button !== playButton) {
                button.innerHTML = playIcon;
            }
        });
        playPause();
    });
    stopButton.addEventListener('click', stopSounds);
    // Event listener for progress update during playback
    soundA.addEventListener('playing', function () {
        console.log('playing a');
        updateProgress(soundA, progressFill);
    });
    soundB.addEventListener('playing', function () {
        console.log('playing b');
        updateProgress(soundB, progressFill);
    });
    // Stop all sounds and reset UI
    function stopSounds() {
        playButton.innerHTML = playIcon;
        aButton.disabled = false;
        bButton.disabled = true;
        playButton.disabled = false;
        stopButton.disabled = true;
        soundA.pause();
        soundA.currentTime = 0;
        soundB.pause();
        soundB.currentTime = 0;
    }
    // Pause all sounds
    function pauseAll() {
        var allAudio = document.querySelectorAll('audio');
        allAudio.forEach(function (audio) {
            audio.pause();
        });
        document.querySelectorAll('.play__button').forEach(function (button) {
            button.innerHTML = playIcon;
        });
    }
    // Update progress bar during playback
    function updateProgress(audio, progressBar) {
        progressBar.style.width = ((audio.currentTime / (audio.duration || 1)) * 100 || 0) + '%';
        requestAnimationFrame(function () { return updateProgress(audio, progressBar); });
    }
}
// Initialize all players
function initializePlayers(players) {
    players.forEach(initializePlayer);
}
var players = document.querySelectorAll('.player__wrapper');
initializePlayers(players);
//# sourceMappingURL=ab-player.js.map