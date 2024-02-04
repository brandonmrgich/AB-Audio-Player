"use strict";
// interface AudioData {
//     audioA: string;
//     audioB: string;
//     songName: string;
//     artist: string;
//   }
// Sample data for audio sources
var audioData = [
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard", artist: "Brandon Mrgich with Blueshades" },
    { audioA: "./assets/sound2-a.mp3", audioB: "./assets/sound2-b.mp3", songName: "Sample Audio", artist: "Sample" },
    // Add more data as needed
];
// Function to create audio players
function createAudioPlayer(data) {
    var _a;
    var playerWrapper = document.createElement("div");
    playerWrapper.classList.add("player__wrapper");
    playerWrapper.dataset.audioA = data.audioA;
    playerWrapper.dataset.audioB = data.audioB;
    // Player HTML structure with song name
    playerWrapper.innerHTML = "\n        <div class \"song__metadata__container\">  \n            <div class=\"song__name\">".concat(data.songName, "</div>\n            <div class=\"song__artist\">By: ").concat(data.artist, "</div>\n        </div>\n        <div class=\"progress__container progress\">\n            <div class=\"progress__bar progress__fill\"></div>\n        </div>\n        <div class=\"ab__controls\">\n            <button class=\"ab__button a__button\" disabled=\"true\">A</button>\n            <button class=\"ab__button b__button\" disabled=\"true\">B</button>\n        </div>\n        <div class=\"play__stop__controls\">\n            <button class=\"play__pause__button play__button\" disabled=\"true\"><i class=\"fa-solid fa-play\"></i></button>\n            <button class=\"play__pause__button stop__button\" disabled=\"true\"><i class=\"fa-solid fa-stop\"></i></button>\n        </div>\n    ");
    (_a = document.getElementById("playersContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(playerWrapper);
}
// Create audio players for each data entry
audioData.forEach(createAudioPlayer);
//# sourceMappingURL=main.js.map