console.log(" Welcome to Spotify");

let audioElement = new Audio('./songs/1.mp3');
// audioElement.play();

let songIndex = 0;
let progress = 0;
let masterPlay = document.getElementById("masterplay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songs = [{
    songName: "Song 1",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg"
}, {
    songName: "Song 2",
    filePath: "./songs/2.mp3",
    coverPath: "./covers/2.jpg"
}, {
    songName: "Song 3",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg"
}, {
    songName: "Song 4",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg"
}, {
    songName: "Song 5",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg"
}, {
    songName: "Song 6",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/6.jpg"
}, ]

//Listen To events
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})