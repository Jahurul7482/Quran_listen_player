let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let usdateTimer;

const music_list = [
  {
    img: "images/1.jpeg",
    name: "Al Fatiha",
    artist: "Al-Afasy",
    music: "music/001-al-fatihah.mp3",
  },
  {
    img: "images/2.jpeg",
    name: "Al Baqarah",
    artist: "Khalifa Al Tunaiji",
    music: "music/002.mp3",
  },
  {
    img: "images/3.jpeg",
    name: "Al Imran",
    artist: "Khalifa Al Tunaiji",
    music: "music/003.mp3",
  },
  {
    img: "images/4.jpg",
    name: "An Nisa",
    artist: "Khalifa Al Tunaiji",
    music: "music/004.mp3",
  },
  {
    img: "images/5.jpg",
    name: "Al Maidah",
    artist: "Khalifa Al Tunaiji",
    music: "music/005.mp3",
  },
  {
    img: "images/6.jpg",
    name: "Al An'am",
    artist: "Khalifa Al Tunaiji",
    music: "music/006.mp3",
  },
  {
    img: "images/7.jpg",
    name: "Al Araf",
    artist: "Khalifa Al Tunaiji",
    music: "music/007.mp3",
  },
  {
    img: "images/8.jpg",
    name: "Al Anfal",
    artist: "Al-Afasy",
    music: "music/008-al-anfal.mp3",
  },
  {
    img: "images/9.jpg",
    name: "At Taubah",
    artist: "Khalifa Al Tunaiji",
    music: "music/009.mp3",
  },
  {
    img: "images/10.jpg",
    name: "Younus",
    artist: "Al-Afasy",
    music: "music/010-yunus.mp3",
  },
  {
    img: "images/11.jpg",
    name: "Hud",
    artist: "Al-Afasy",
    music: "music/011-hud.mp3",
  },
  {
    img: "images/12.jpg",
    name: "Yousuf",
    artist: "Al-Afasy",
    music: "music/012-yusuf.mp3",
  },
  {
    img: "images/13.jpg",
    name: "Ar Rad",
    artist: "Al-Afasy",
    music: "music/013-ar-rad.mp3",
  },
  {
    img: "images/14.jpg",
    name: "Ibrahim",
    artist: "Al-Afasy",
    music: "music/014-ibrahim.mp3",
  },
  {
    img: "images/15.jpg",
    name: "Al Hijr",
    artist: "Al-Afasy",
    music: "music/015-al-hijr.mp3",
  },
  {
    img: "images/16.jpg",
    name: "An Nahl",
    artist: "Al-Afasy",
    music: "music/016-an-nahl.mp3",
  },
  {
    img: "images/17.jpg",
    name: "Al Israh",
    artist: "Al-Afasy",
    music: "music/017-al-isra.mp3",
  },
  {
    img: "images/18.jpg",
    name: "Al Kahf",
    artist: "Al-Afasy",
    music: "music/018-al-kahf.mp3",
  },
  {
    img: "images/19.jpg",
    name: "Maryam",
    artist: "Al-Afasy",
    music: "music/019-maryam.mp3",
  },
  {
    img: "images/20.jpg",
    name: "Taw Ha",
    artist: "Al-Afasy",
    music: "music/020-ta-ha.mp3",
  },
  {
    img: "images/21.jpg",
    name: "Al Ambiya",
    artist: "Al-Afasy",
    music: "music/021-al-anbiya.mp3",
  },
  {
    img: "images/22.jpg",
    name: "Al Hajj",
    artist: "Al-Afasy",
    music: "music/022-al-hajj.mp3",
  },
  {
    img: "images/23.jpg",
    name: "Al Mu'minun",
    artist: "Al-Afasy",
    music: "music/023-al-muminun.mp3",
  },
  {
    img: "images/24.jpg",
    name: "An Noor",
    artist: "Al-Afasy",
    music: "music/024-an-nur.mp3",
  },
  {
    img: "images/25.jpg",
    name: "Al Furqan",
    artist: "Al-Afasy",
    music: "music/025-al-furqan.mp3",
  },
  {
    img: "images/26.jpg",
    name: "Ash Shuara",
    artist: "Al-Afasy",
    music: "music/026-ash-shuara.mp3",
  },
  {
    img: "images/27.jpg",
    name: "An Naml",
    artist: "Al-Afasy",
    music: "music/027-an-naml.mp3",
  },
  {
    img: "images/28.jpg",
    name: "Al Qasas",
    artist: "Al-Afasy",
    music: "music/028-al-qasas.mp3",
  },
  {
    img: "images/29.jpg",
    name: "Al Ankabut",
    artist: "Al-Afasy",
    music: "music/029-al-ankabut.mp3",
  },
  {
    img: "images/30.jpg",
    name: "Ar Rum",
    artist: "Al-Afasy",
    music: "music/030-ar-rum.mp3",
  },
  {
    img: "images/31.jpg",
    name: "Luqman",
    artist: "Al-Afasy",
    music: "music/031-luqman.mp3",
  },
  {
    img: "images/32.jpg",
    name: "As Sajdah",
    artist: "Al-Afasy",
    music: "music/032-as-sajdah.mp3",
  },
  {
    img: "images/33.jpg",
    name: "Al Ahzab",
    artist: "Al-Afasy",
    music: "music/033-al-ahzab.mp3",
  },
  {
    img: "images/34.jpg",
    name: "Saba",
    artist: "Al-Afasy",
    music: "music/034-saba.mp3",
  },
  {
    img: "images/35.jpg",
    name: "Fatir",
    artist: "Al-Afasy",
    music: "music/035-fatir.mp3",
  },
  {
    img: "images/36.jpg",
    name: "Ya Sin",
    artist: "Al-Afasy",
    music: "music/036-ya-sin.mp3",
  },
  {
    img: "images/37.jpg",
    name: "As Saffat",
    artist: "Al-Afasy",
    music: "music/037-as-saffat.mp3",
  },
  {
    img: "images/38.jpg",
    name: "Sad",
    artist: "Al-Afasy",
    music: "music/038-sad.mp3",
  },
  {
    img: "images/39.jpg",
    name: "Az Zumar",
    artist: "Al-Afasy",
    music: "music/039-az-zumar.mp3",
  },
  {
    img: "images/40.jpg",
    name: "Ghafir",
    artist: "Al-Afasy",
    music: "music/040-ghafir.mp3",
  },
  {
    img: "images/41.jpg",
    name: "Fussilat",
    artist: "Al-Afasy",
    music: "music/041-fussilat.mp3",
  },
  {
    img: "images/42.jpg",
    name: "Ash Shura",
    artist: "Al-Afasy",
    music: "music/042-ash-shura.mp3",
  },
  {
    img: "images/43.jpg",
    name: "Az Zukhruf",
    artist: "Al-Afasy",
    music: "music/043-az-zukhruf.mp3",
  },
  {
    img: "images/44.jpg",
    name: "Ad Dukhan",
    artist: "Al-Afasy",
    music: "music/044-ad-dukhan.mp3",
  },
  {
    img: "images/45.jpg",
    name: "Al Jathiyah",
    artist: "Al-Afasy",
    music: "music/045-al-jathiyah.mp3",
  },
  {
    img: "images/46.jpg",
    name: "Al Ahqaf",
    artist: "Al-Afasy",
    music: "music/046-al-ahqaf.mp3",
  },
  {
    img: "images/47.jpg",
    name: "Muhammad",
    artist: "Al-Afasy",
    music: "music/047-muhammad.mp3",
  },
  {
    img: "images/48.jpg",
    name: "Al Fath",
    artist: "Al-Afasy",
    music: "music/048-al-fath.mp3",
  },
  {
    img: "images/49.jpg",
    name: "Al Hujurat",
    artist: "Al-Afasy",
    music: "music/049-al-hujurat.mp3",
  },
  {
    img: "images/50.jpg",
    name: "Qaf",
    artist: "Al-Afasy",
    music: "music/050-qaf.mp3",
  },
  {
    img: "images/51.jpg",
    name: "Adh Dhariyat",
    artist: "Al-Afasy",
    music: "music/051-adh-dhariyat.mp3",
  },
  {
    img: "images/52.jpg",
    name: "At Tur",
    artist: "Al-Afasy",
    music: "music/052-at-tur.mp3",
  },
  {
    img: "images/53.jpg",
    name: "An Najm",
    artist: "Al-Afasy",
    music: "music/053-an-najm.mp3",
  },
  {
    img: "images/54.jpg",
    name: "Al Qamar",
    artist: "Al-Afasy",
    music: "music/054-al-qamar.mp3",
  },
  {
    img: "images/55.jpg",
    name: "Ar Rahman",
    artist: "Al-Afasy",
    music: "music/055-ar-rahman.mp3",
  },
  {
    img: "images/56.jpg",
    name: "Al Waqiah",
    artist: "Al-Afasy",
    music: "music/056-al-waqiah.mp3",
  },
  {
    img: "images/57.jpg",
    name: "Al Hadid",
    artist: "Al-Afasy",
    music: "music/057-al-hadid.mp3",
  },
  {
    img: "images/58.jpg",
    name: "Al Mujadilah",
    artist: "Al-Afasy",
    music: "music/058-al-mujadilah.mp3",
  },
  {
    img: "images/59.jpg",
    name: "Al Hashr",
    artist: "Al-Afasy",
    music: "music/059-al-hashr.mp3",
  },
  {
    img: "images/60.jpg",
    name: "Al Mumtahanah",
    artist: "Al-Afasy",
    music: "music/060-al-mumtahanah.mp3",
  },
  {
    img: "images/61.jpg",
    name: "As Saff",
    artist: "Al-Afasy",
    music: "music/061-as-saff.mp3",
  },
  {
    img: "images/62.jpg",
    name: "Al Zumu'ah",
    artist: "Al-Afasy",
    music: "music/062-al-jumuah.mp3",
  },
  {
    img: "images/63.jpg",
    name: "Al Munafiqun",
    artist: "Al-Afasy",
    music: "music/063-al-munafiqun.mp3",
  },
  {
    img: "images/64.jpg",
    name: "At Taghabun",
    artist: "Al-Afasy",
    music: "music/064-at-taghabun.mp3",
  },
  {
    img: "images/65.jpg",
    name: "At Talaq",
    artist: "Al-Afasy",
    music: "music/065-at-talaq.mp3",
  },
  {
    img: "images/66.jpg",
    name: "At Tahrim",
    artist: "Al-Afasy",
    music: "music/066-at-tahrim.mp3",
  },
  {
    img: "images/67.jpg",
    name: "Al Mulk",
    artist: "Al-Afasy",
    music: "music/067-al-mulk.mp3",
  },
  {
    img: "images/68.jpg",
    name: "Al qalam",
    artist: "Al-Afasy",
    music: "music/068-al-qalam.mp3",
  },
  {
    img: "images/69.jpg",
    name: "Al Haqqah",
    artist: "Al-Afasy",
    music: "music/069-al-haqqah.mp3",
  },
  {
    img: "images/70.jpg",
    name: "Al Maarij",
    artist: "Al-Afasy",
    music: "music/070-al-maarij.mp3",
  },
  {
    img: "images/71.jpg",
    name: "Nooh",
    artist: "Al-Afasy",
    music: "music/071-nuh.mp3",
  },
  {
    img: "images/72.jpg",
    name: "Al Zinn",
    artist: "Al-Afasy",
    music: "music/072-al-jinn.mp3",
  },
  {
    img: "images/73.jpg",
    name: "Al Muzammil",
    artist: "Al-Afasy",
    music: "music/073-al-muzammil.mp3",
  },
  {
    img: "images/74.jpg",
    name: "Al Muddaththir",
    artist: "Al-Afasy",
    music: "music/074-al-muddaththir.mp3",
  },
  {
    img: "images/75.jpg",
    name: "Al Qiyamah",
    artist: "Al-Afasy",
    music: "music/075-al-qiyamah.mp3",
  },
  {
    img: "images/76.jpg",
    name: "Al Insan",
    artist: "Al-Afasy",
    music: "music/076-al-insan.mp3",
  },
  {
    img: "images/77.jpg",
    name: "Al Mursalat",
    artist: "Al-Afasy",
    music: "music/077-al-mursalat.mp3",
  },
  {
    img: "images/78.jpg",
    name: "An Naba",
    artist: "Al-Afasy",
    music: "music/078-an-naba.mp3",
  },
  {
    img: "images/79.jpg",
    name: "An Naziat",
    artist: "Al-Afasy",
    music: "music/079-an-naziat.mp3",
  },
  {
    img: "images/80.jpg",
    name: "Abasa",
    artist: "Al-Afasy",
    music: "music/080-abasa.mp3",
  },
  {
    img: "images/81.jpg",
    name: "At Takwir",
    artist: "Al-Afasy",
    music: "music/081-at-takwir.mp3",
  },
  {
    img: "images/82.jpg",
    name: "Al Infitar",
    artist: "Al-Afasy",
    music: "music/082-al-infitar.mp3",
  },
  {
    img: "images/83.jpg",
    name: "Al Mutaffifin",
    artist: "Al-Afasy",
    music: "music/083-al-mutaffifin.mp3",
  },
  {
    img: "images/84.jpg",
    name: "Al Inshiqaq",
    artist: "Al-Afasy",
    music: "music/084-al-inshiqaq.mp3",
  },
  {
    img: "images/85.jpg",
    name: "Al Buruj",
    artist: "Al-Afasy",
    music: "music/085-al-buruj.mp3",
  },
  {
    img: "images/86.jpg",
    name: "At Tariq",
    artist: "Al-Afasy",
    music: "music/086-at-tariq.mp3",
  },
  {
    img: "images/87.jpg",
    name: "AL A'la",
    artist: "Al-Afasy",
    music: "music/087-al-ala.mp3",
  },
  {
    img: "images/88.jpg",
    name: "Al Ghashiyah",
    artist: "Al-Afasy",
    music: "music/088-al-ghashiyah.mp3",
  },
  {
    img: "images/89.jpg",
    name: "Al Fazr",
    artist: "Al-Afasy",
    music: "music/089-al-fajr.mp3",
  },
  {
    img: "images/90.jpg",
    name: "Al Balad",
    artist: "Al-Afasy",
    music: "music/090-al-balad.mp3",
  },
  {
    img: "images/91.jpg",
    name: "Ash Shams",
    artist: "Al-Afasy",
    music: "music/091-ash-shams.mp3",
  },
  {
    img: "images/92.jpg",
    name: "Al Lail",
    artist: "Al-Afasy",
    music: "music/092-al-lail.mp3",
  },
  {
    img: "images/93.jpg",
    name: "Ad Duha",
    artist: "Al-Afasy",
    music: "music/093-ad-duha.mp3",
  },
  {
    img: "images/94.jpg",
    name: "Ash Sharh",
    artist: "Al-Afasy",
    music: "music/094-ash-sharh.mp3",
  },
  {
    img: "images/95.jpg",
    name: "At Tin",
    artist: "Al-Afasy",
    music: "music/095-at-tin.mp3",
  },
  {
    img: "images/96.jpg",
    name: "Al Alaq",
    artist: "Al-Afasy",
    music: "music/096-al-alaq.mp3",
  },
  {
    img: "images/97.jpg",
    name: "Al Qadr",
    artist: "Al-Afasy",
    music: "music/097-al-qadr.mp3",
  },
  {
    img: "images/98.jpg",
    name: "Al Baiyyinah",
    artist: "Al-Afasy",
    music: "music/098-al-baiyyinah.mp3",
  },
  {
    img: "images/99.jpg",
    name: "Az Zalzalah",
    artist: "Al-Afasy",
    music: "music/099-az-zalzalah.mp3",
  },
  {
    img: "images/100.jpg",
    name: "Al Adiyat",
    artist: "Al-Afasy",
    music: "music/100-al-adiyat.mp3",
  },
  {
    img: "images/101.jpg",
    name: "Al Qariah",
    artist: "Al-Afasy",
    music: "music/101-al-qariah.mp3",
  },
  {
    img: "images/102.jpg",
    name: "At Taqathur",
    artist: "Al-Afasy",
    music: "music/102-at-takathur.mp3",
  },
  {
    img: "images/103.jpg",
    name: "Al Asr",
    artist: "Al-Afasy",
    music: "music/103-al-asr.mp3",
  },
  {
    img: "images/104.jpg",
    name: "Al Humazah",
    artist: "Al-Afasy",
    music: "music/104-al-humazah.mp3",
  },
  {
    img: "images/105.jpg",
    name: "Al Fil",
    artist: "Al-Afasy",
    music: "music/105-al-fil.mp3",
  },
  {
    img: "images/106.jpg",
    name: "Quraish",
    artist: "Al-Afasy",
    music: "music/106-quraish.mp3",
  },
  {
    img: "images/107.jpg",
    name: "Al Ma'un",
    artist: "Al-Afasy",
    music: "music/107-al-maun.mp3",
  },
  {
    img: "images/108.jpg",
    name: "Al Kauthar",
    artist: "Al-Afasy",
    music: "music/108-al-kauthar.mp3",
  },
  {
    img: "images/109.jpg",
    name: "Al Kafirun",
    artist: "Al-Afasy",
    music: "music/109-al-kafirun.mp3",
  },
  {
    img: "images/110.jpg",
    name: "An Nasr",
    artist: "Al-Afasy",
    music: "music/110-an-nasr.mp3",
  },
  {
    img: "images/111.jpeg",
    name: "Lahab",
    artist: "Al-Afasy",
    music: "music/111-al-lahab.mp3",
  },
  {
    img: "images/112.jpg",
    name: "Al Ikhlas",
    artist: "Al-Afasy",
    music: "music/112-al-ikhlas.mp3",
  },
  {
    img: "images/113.jpg",
    name: "Al Falaq",
    artist: "Al-Afasy",
    music: "music/113-al-falaq.mp3",
  },
  {
    img: "images/114.jpg",
    name: "An Nas",
    artist: "Al-Afasy",
    music: "music/114-an-nas.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(usdateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;

  usdateTimer = setInterval(setUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function random_bg_color() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];
  let a;

  function populate(a) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let y = hex[x];
      a += y;
    }
    return a;
  }
  let color1 = populate("#");
  let color2 = populate("#");
  var angle = "to right";

  let gradient =
    "linear-gradient(" + angle + "," + color1 + ", " + color2 + ")";
  document.body.style.background = gradient;
}
function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}
function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}
function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
