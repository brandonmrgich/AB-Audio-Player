// // Function to create and initialize audio elements
// function createAudioElement(src: string) {
//   const audio = document.createElement('audio');
//   audio.src = src;
//   audio.preload = 'auto';
//   audio.setAttribute('hidden', 'true');
//   document.body.append(audio);
//   return audio;
// }


// // Function to initialize a player
// function initializePlayer(player: any) {
//   const soundA = createAudioElement(player.getAttribute('data-audio-a') || '');
//   const soundB = createAudioElement(player.getAttribute('data-audio-b') || '');

//   const aButton = player.querySelector('.a__button')! as HTMLButtonElement;
//   const bButton = player.querySelector('.b__button')! as HTMLButtonElement;
//   const playButton = player.querySelector('.play__button')! as HTMLButtonElement;
//   const stopButton = player.querySelector('.stop__button')! as HTMLButtonElement;
//   const progressFill = player.querySelector('.progress__fill')! as HTMLElement;

//   const playIcon = '<i class="fa-solid fa-play"></i>';
//   const pauseIcon = '<i class="fa-solid fa-pause"></i>';

//   let soundAReady = false;
//   let soundBReady = false;

//   // Check if audio elements are ready
//   function audioIsReady() {
//     if (soundAReady && soundBReady) {
//       console.log('...audio loaded!');
//       aButton.disabled = false;
//       playButton.disabled = false;
//     } else {
//       console.log('Audio loading...');
//     }
//   }

//   soundA.oncanplaythrough = () => {
//     if (!soundAReady) {
//       soundAReady = true;
//       audioIsReady();
//     }
//   };

//   soundB.oncanplaythrough = () => {
//     if (!soundBReady) {
//       soundBReady = true;
//       audioIsReady();
//     }
//   };

//   // Click event on progress bar to seek
//   player.querySelector('.progress').addEventListener('click', (event: any) => {
//     const rect = (event.currentTarget).getBoundingClientRect();
//     const percentage = (event.clientX - rect.left) / rect.width;
//     soundA.currentTime = percentage * (soundA.duration || 0);
//     soundB.currentTime = percentage * (soundB.duration || 0);
//   });

//   // Play/Pause function
//   function playPause() {
//     if (soundA.paused && soundB.paused) {
//       const soundATime = soundA.currentTime;
//       const soundBTime = soundB.currentTime;
//       if (soundATime >= soundBTime) {
//         soundA.play();
//         bButton.disabled = false;
//         aButton.disabled = true;
//         playButton.innerHTML = pauseIcon;
//       } else {
//         soundB.play();
//         bButton.disabled = true;
//         aButton.disabled = false;
//         playButton.innerHTML = pauseIcon;
//       }
//       stopButton.disabled = false;
//     } else {
//       playButton.innerHTML = playIcon;
//       soundA.pause();
//       soundB.pause();
//     }
//   }

//   // Button event listeners
//   aButton.addEventListener('click', () => {
//     pauseAll();
//     playButton.innerHTML = pauseIcon;
//     aButton.disabled = true;
//     bButton.disabled = false;
//     stopButton.disabled = false;
//     if (soundB.currentTime > 0) {
//       soundA.currentTime = soundB.currentTime;
//       soundA.play();
//       soundB.pause();
//     } else {
//       soundA.play();
//       soundB.pause();
//     }
//   });

//   bButton.addEventListener('click', () => {
//     pauseAll();
//     playButton.innerHTML = pauseIcon;
//     bButton.disabled = true;
//     aButton.disabled = false;
//     stopButton.disabled = false;
//     if (soundA.currentTime > 0) {
//       soundB.currentTime = soundA.currentTime;
//       soundB.play();
//       soundA.pause();
//     } else {
//       soundB.play();
//     }
//   });

//   playButton.addEventListener('click', () => {
//     const allAudio = document.querySelectorAll('audio');
//     const allButtons = document.querySelectorAll('.play__button');
//     allAudio.forEach((audio) => {
//       if (audio !== soundA && audio !== soundB) {
//         audio.pause();
//       }
//     });
//     allButtons.forEach((button) => {
//       if (button !== playButton) {
//         button.innerHTML = playIcon;
//       }
//     });
//     playPause();
//   });

//   stopButton.addEventListener('click', stopSounds);

//   // Event listener for progress update during playback
//   soundA.addEventListener('playing', () => {
//     console.log('playing a');
//     updateProgress(soundA, progressFill);
//   });

//   soundB.addEventListener('playing', () => {
//     console.log('playing b');
//     updateProgress(soundB, progressFill);
//   });

//   // Stop all sounds and reset UI
//   function stopSounds() {
//     playButton.innerHTML = playIcon;
//     aButton.disabled = false;
//     bButton.disabled = true;
//     playButton.disabled = false;
//     stopButton.disabled = true;
//     soundA.pause();
//     soundA.currentTime = 0;
//     soundB.pause();
//     soundB.currentTime = 0;
//   }

//   // Pause all sounds
//   function pauseAll() {
//     const allAudio = document.querySelectorAll('audio');
//     allAudio.forEach((audio) => {
//       audio.pause();
//     });
//     document.querySelectorAll('.play__button').forEach((button) => {
//       button.innerHTML = playIcon;
//     });
//   }

//   // Update progress bar during playback
//   function updateProgress(audio: HTMLAudioElement, progressBar: HTMLElement) {
//     progressBar.style.width = ((audio.currentTime / (audio.duration || 1)) * 100 || 0) + '%';
//     requestAnimationFrame(() => updateProgress(audio, progressBar));
//   }
// }

// // Initialize all players
// function initializePlayers(players: NodeListOf<Element>) {
//   players.forEach(initializePlayer);
// }

// const players = document.querySelectorAll('.player__wrapper');
// initializePlayers(players);


// ############################################################################################################
// ############################################################################################################
// ############################################################################################################
// ############################################################################################################


interface PlayerElement extends Element {
    audioA: string;
    audioB: string;
    querySelector(selector: string): HTMLElement | null;

//   const playIcon = '<i class="fa-solid fa-play"></i>';
//   const pauseIcon = '<i class="fa-solid fa-pause"></i>';
}

class AudioPlayer {
    private soundA: HTMLAudioElement;
    private soundB: HTMLAudioElement;
    private aButton: HTMLButtonElement;
    private bButton: HTMLButtonElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    private playIcon = '';
    private pauseIcon = '';
   
    private progressFill: HTMLElement;
    private soundAReady: Boolean;
    private soundBReady: Boolean;

    constructor(private player: PlayerElement) {
        this.soundA = this.createAudioElement(player.audioA || '');
        this.soundB = this.createAudioElement(player.audioB || '');

        this.aButton = player.querySelector('.a__button') as HTMLButtonElement;
        this.bButton = player.querySelector('.b__button') as HTMLButtonElement;
        this.playButton = player.querySelector('.play__button') as HTMLButtonElement;
        this.stopButton = player.querySelector('.stop__button') as HTMLButtonElement;
        this.progressFill = player.querySelector('.progress__fill') as HTMLElement;
        this.playIcon = '<i class="fa-solid fa-play"></i>';
        this.pauseIcon = '<i class="fa-solid fa-pause"></i>';

        this.soundAReady = false;
        this.soundBReady = false;

        // Add other initialization logic if needed
    }

    private createAudioElement(src: string): HTMLAudioElement {  
        const audio = document.createElement('audio');
        audio.src = src;
        audio.preload = 'auto';
        audio.setAttribute('hidden', 'true');
        document.body.append(audio);
        return audio;
    }

    private audioIsReady() {
        if (this.soundAReady && this.soundBReady) {
        console.log('...audio loaded!');
        this.aButton.disabled = false;
        this.playButton.disabled = false;
        } else {
        console.log('Audio loading...');
        }
    }

    private playPause() {
        if (this.soundA.paused && this.soundB.paused) {
            const soundATime = this.soundA.currentTime;
            const soundBTime = this.soundB.currentTime;
            if (soundATime >= soundBTime) {
                this.soundA.play();
                this.bButton.disabled = false;
                this.aButton.disabled = true;
                this.playButton.innerHTML = this.pauseIcon;
            } else {
                this.soundB.play();
                this.bButton.disabled = true;
                this.aButton.disabled = false;
                this.playButton.innerHTML = this.pauseIcon;
            }
                this.stopButton.disabled = false;
        } else {
            this.playButton.innerHTML = this.playIcon;
            this.soundA.pause();
            this.soundB.pause();
        }
    }

    private stopSounds() {
        this.playButton.innerHTML = this.playIcon;
        this.aButton.disabled = false;
        this.bButton.disabled = true;
        this.playButton.disabled = false;
        this.stopButton.disabled = true;
        this.soundA.pause();
        this.soundA.currentTime = 0;
        this.soundB.pause();
        this.soundB.currentTime = 0;
    }

    // Add other methods as needed

    public initialize() {
        // Add your initialization logic
    }
}

// Usage
const players = document.querySelectorAll('.player__wrapper');
players.forEach((player) => new AudioPlayer(player as PlayerElement).initialize());

