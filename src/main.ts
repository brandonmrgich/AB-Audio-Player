// interface AudioData {
//     audioA: string;
//     audioB: string;
//     songName: string;
//     artist: string;
//   }
  
// Sample data for audio sources
const audioData = [
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    { audioA: "./assets/sound1-a.mp3", audioB: "./assets/sound1-b.mp3", songName: "Unheard" , artist: "Brandon Mrgich with Blueshades"},
    // Add more data as needed
];

// Function to create audio players
function createAudioPlayer(data: any) {
    const playerWrapper = document.createElement("div");
    playerWrapper.classList.add("player__wrapper");
    playerWrapper.dataset.audioA = data.audioA;
    playerWrapper.dataset.audioB = data.audioB;

    // Player HTML structure with song name
    playerWrapper.innerHTML = `
        <div class "song__metadata__container">  
            <div class="song__name">${data.songName}</div>
            <div class="song__artist">By: ${data.artist}</div>
        </div>
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

    document.getElementById("playersContainer")?.appendChild(playerWrapper);
}

// Create audio players for each data entry
audioData.forEach(createAudioPlayer);
