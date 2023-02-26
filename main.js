const wow = new WOW({
  boxClass: 'wow', /* класс, который необходим для работы wow.js */
  animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
  offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
  mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
  live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
});
wow.init(); /* Инициализация плагина с установленными выше свойствами */


const player = document.querySelector('.player'),
      playBtn = document.querySelector('.btn_play'),
      prevBtn = document.querySelector('.btn_prev'),
      nextBtn = document.querySelector('.btn_next'),
      volumeUp = document.querySelector('.btn_volume'),
      volumeImg = document.querySelector('.volume_img'),
      playerSong = document.querySelector('.player_song'),
      audio = document.querySelector('.audio'),
      playerCover = document.querySelector('.cover_img'),
      volumeContainer = document.querySelector('.volume_container'),
      playerVolume = document.querySelector('.player_vol'),
      buttonImg = document.querySelector('.button_img');

const songs = ['Aint me', 'In The Ev', 'Last Chance'];

let songIndex = 0;

function loadSOng (song) {
  playerSong.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  playerCover.src = `/audio/img/cover${songIndex + 1}.jpg`;
}

loadSOng(songs[songIndex]);

//------------------------------------------------------- PLAY
function playSong () {
  player.classList.add('play');
  
  audio.play();
}


function pauseSong () {
  player.classList.remove('play');
  audio.pause();
}


playBtn.addEventListener('click', ()=> {
  const isPlaying = player.classList.contains('play');

  if(isPlaying){
    buttonImg.src = '/audio/img/play.svg';
    pauseSong();
  }else {
    buttonImg.src = '/audio/img/pause.svg';
    playSong();
  }
});


//---------------------------------------------------- NEXT SONG 
function nextSong () {
  songIndex++;

  if(songIndex > songs.length - 1){
    songIndex = 0;
  }

  loadSOng(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener('click', nextSong);

//----------------------------------------------------- PREV SONG 
function prevSong () {
  songIndex--;

  if(songIndex < 0){
    songIndex = songs.length - 1;
  }

  loadSOng(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', prevSong);

//----------------------------------------- VOLUME
volumeUp.addEventListener('click', ()=>{
  if(audio.volume === 0){
    volumeImg.src = '/audio/img/volume-up.svg';
    audio.volume = 0.8;
  } else {
    volumeImg.src = '/audio/img/volume-muted.svg';
    audio.volume= 0;
  }
});

//----------------------------------------- VOLUME BAR


function volumeChange (elem) {
  const clickX = elem.offsetX / 100;
  audio.volume = clickX;
  playerVolume.style.width = `${clickX * 100}%`;
}


volumeContainer.addEventListener('click', ()=>{
  if(audio.volume === 0){
    volumeImg.src = '/audio/img/volume-up.svg';
  }
});

volumeContainer.addEventListener('click', volumeChange);

//----------------------------------------- POP UP
const openPop = document.getElementsByClassName('middle_btn-btn'),
      closePop = document.querySelector('.pop_up-close'),
      popUp = document.querySelector('.pop_up');


for(i=0; i<openPop.length; i++) {
  openPop[i].addEventListener('click', ()=>{
    popUp.classList.add('active');
  });
}


closePop.addEventListener('click', ()=>{
  popUp.classList.remove('active');
});


//----------------------------------------- HEADER BURGER

const burgerBtn = document.querySelector('.btn_hamburger'),
      headerMenu = document.querySelector('.header_menu');


burgerBtn.addEventListener('click', ()=>{
  headerMenu.classList.toggle('active');
}) ; 

//----------------------------------------- HEADER PLAYER

const headerBtnPlay = document.querySelector('.header_player-play'),
      headerBtnImg = document.querySelector('.header_player-img'),
      bottomAudio = document.querySelector('.bottom_audio');

      

      


function bottomPlay () {
  player.classList.add('play');
  audio.play();
}

function bottomPause () {
  player.classList.remove('play');
  audio.pause();
}

const clickss = headerBtnPlay.addEventListener('click', ()=>{
  const isBottomPlaying = player.classList.contains('play');
  player.style.display = 'block';

  if(isBottomPlaying){
    bottomPause();
    headerBtnImg.src = '/audio/img/play.svg';
    buttonImg.src = '/audio/img/play.svg';
  }else{
    bottomPlay();
    headerBtnImg.src = '/audio/img/pause.svg';
    buttonImg.src = '/audio/img/pause.svg';
  }

});



