// Sample data for audio sources
const audioData = [
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3" },
    { audioA: "./assets/sound2-a.mp3", audioB: "./assets/sound2-b.mp3" },
    // Add more data as needed
];

// Function to create audio players
function createAudioPlayer(data) {
    const playerWrapper = document.createElement("div");
    playerWrapper.classList.add("player__wrapper");
    playerWrapper.dataset.audioA = data.audioA;
    playerWrapper.dataset.audioB = data.audioB;

    // Your existing player HTML structure
    playerWrapper.innerHTML = `
        <div class="progress__container progress">
            <div class="progress__bar progress__fill"></div>
        </div>
        <div class="ab__controls">
            <button class="ab__button a__button" disabled="true">A</button>
            <button class="ab__button b__button" disabled="true">B</button>
        </div>
        <div class="play__stop__controls">
            <button class="play__pause__button play__button" disabled="true"><i class="fa-solid fa-play"></i></button>
            <button class="play__pause__button stop__button" disabled="true"><i class="fa-solid fa-stop"></i></button>
        </div>
    `;

    document.getElementById("playersContainer").appendChild(playerWrapper);
}

// Create audio players for each data entry
audioData.forEach(createAudioPlayer);

// Include your existing ab-player.js script here or load it dynamically if needed
//<script src="./js/ab-player.js"></script>
