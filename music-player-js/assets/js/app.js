const track = document.getElementById('track');
const trackTitle = document.querySelector('.song-title');
const cover = document.querySelector('.cover');
const duration = document.getElementById('duration');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const prevBtn = document.querySelector('.prev-icon');
const playPauseBtn = document.querySelector('.play-pause-icon');
const nextBtn = document.querySelector('.next-icon');
let currentSong = 0;
let playing = false;
const songs = [
    {
        track: '/music-player-js/assets/audio/Arabic Kuththu.mp3',
        trackName: 'Arabic Kuthu - Beast',
        cover: '/music-player-js/assets/img/arabic-kuthu-cover.jpg'
    },
    {
        track: '/music-player-js/assets/audio/En Peeru Meenakumari.mp3',
        trackName: 'En Peeru Meenakumari',
        cover: '/music-player-js/assets/img/en-peeru-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Gangnam Style.mp3',
        trackName: 'Gangnam Style by PSY',
        cover: '/music-player-js/assets/img/gangnam-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Jalabulajangu.mp3',
        trackName: 'Jalabulajangu',
        cover: '/music-player-js/assets/img/jalabulajangu-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Kanja Poovu Kannala.mp3',
        trackName: 'Kanja Poovu Kannala',
        cover: '/music-player-js/assets/img/kanja-poovu-kannala-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Kodana Kodi.mp3',
        trackName: 'Kodana Kodi',
        cover: '/music-player-js/assets/img/kodana-kodi-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Machi Open the Bottle.mp3',
        trackName: 'Machi Open the Bottle',
        cover: '/music-player-js/assets/img/machi-open-the-bottle-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Madura Veeran.mp3',
        trackName: 'Madura Veeran',
        cover: '/music-player-js/assets/img/madura-veeran-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Megham Karukatha.mp3',
        trackName: 'Megham Karukatha',
        cover: '/music-player-js/assets/img/megham-karukatha-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Meow Meow.mp3',
        trackName: 'Meow Meow',
        cover: '/music-player-js/assets/img/meow-meow-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Mukkala Mukkabla.mp3',
        trackName: 'Mukkala Mukkabla',
        cover: '/music-player-js/assets/img/mukkala-mukkabla-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Naattu Koothu.mp3',
        trackName: 'Naattu Koothu',
        cover: '/music-player-js/assets/img/naattu-koothu-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Oo Solriya Oo Oo Solriya.mp3',
        trackName: 'Oo Soldriya',
        cover: '/music-player-js/assets/img/oo-soldriya-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Pathala Pathala Vikram.mp3',
        trackName: 'Pathala Pathala',
        cover: '/music-player-js/assets/img/pathala-pathala-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Private Party.mp3',
        trackName: 'Private Party',
        cover: '/music-player-js/assets/img/private-party-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Rolex Theme.mp3',
        trackName: 'Rolex Theme',
        cover: '/music-player-js/assets/img/rolex-theme-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Private Party.mp3',
        trackName: 'Private Party',
        cover: '/music-player-js/assets/img/private-party-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Thaai Kelavi.mp3',
        trackName: 'Thaai Kelavi',
        cover: '/music-player-js/assets/img/thaai-kelavi-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Vikram - Title Track.mp3',
        trackName: 'Title Track - Vikram',
        cover: '/music-player-js/assets/img/vikram-cover.jpg',
    },
    {
        track: '/music-player-js/assets/audio/Where Is the Party.mp3',
        trackName: 'Where Is the Party',
        cover: '/music-player-js/assets/img/where-is-the-party-cover.jpg',
    }
];
/* Update Current Time and Total Time of Song */
function seekUpdate() {
    let seekPosition = track.currentTime * (100 / track.duration);
    duration.value = seekPosition;
    let cm = Math.floor(track.currentTime / 60);
    let cs = Math.floor(track.currentTime - cm * 60);
    let dm = Math.floor(track.duration / 60);
    let ds = Math.floor(track.duration - dm * 60);

    if (cs < 10) { cs = "0" + cs; }
    if (ds < 10) { ds = "0" + ds; }
    if (cm < 10) { cm = "0" + cm; }
    if (dm < 10) { dm = "0" + dm; }
 
    currentTime.innerHTML = `${cm}:${cs}`;
    totalTime.innerHTML = `${dm}:${ds}`;
}
/* Load current selected number of song from total sonngs */
function loadSong(currentSong) {
    track.src = songs[currentSong].track;
    cover.src = songs[currentSong].cover;
    trackTitle.innerHTML = songs[currentSong].trackName;
    clearInterval(seekUpdate);
}
loadSong(currentSong);
/* Check play or pause the song */
const playPause = () => {
    !playing ? playMusic() : pauseMusic();
}
/* Song play function */
function playMusic() {
    track.play();
    playing = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
/* Song pause function */
function pauseMusic() {
    track.pause();
    playing = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}
/* Next function when click next arrow */
function next() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    loadSong(currentSong);
    track.load();
    playMusic();
}
/* Prev function when click previous arrow */
function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    track.load();
    playMusic();
}
/* click the seek bar to load the song selected time */
function seek() {
    const seekTime = track.duration * (duration.value / 100);
    track.currentTime = seekTime;
    playMusic();
}
/* Update the seek bar based on song loading time */
function updateDuration() {
    const value = (track.currentTime / track.duration) * 100;
    duration.style.background = `linear-gradient(to right, var(--blue) 0%, var(--blue) ${value}%, #fff ${value}%, #fff 100%)`;
}
/* Set event listener for all functions */
playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
duration.addEventListener('input', seek);
track.addEventListener('ended', next);
track.addEventListener('timeupdate', ()=> {
    seekUpdate();
    updateDuration();
});

document.addEventListener('keydown', (e)=> {
    if(e.key==" ") {
        !playing ? playMusic() : pauseMusic();
    }
    /* left arrow key in keyboard*/
    if(e.keyCode=='37') {
        prev();
    }
    /* right arrow key in keyboard*/
    if(e.keyCode=='39') {
        next();
    }
});