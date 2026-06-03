const tracks = [
    {
        title: "Coffee",
        artist: "beabadoobee",
        cover: "https://clubtone.do.am/_ld/6518/651812.jpg",
        url: "beabadoobee - Coffee.mp3"
        
    },
    {
        title: "The Loser",
        artist: "Verzache ",
        cover: "https://cdn-images.dzcdn.net/images/cover/4fb50577aafc3f1c7089c0bd553a95bb/0x1900-000000-80-0-0.jpg",
        url: "Verzache - The Loser.mp3"
    },
    {
        title: "Beanie",
        artist: "Chezile",
        cover: "https://images.wallpaperscraft.ru/image/single/siluet_noch_zvezdnoe_nebo_137292_1280x1280.jpg",
        url: "Chezile - Beanie.mp3"
    },
    {
        title: "Space Song",
        artist: "First To Eleven",
        cover: "https://i1.sndcdn.com/artworks-uTKBZTnXAlVerzdr-kJkdyg-t500x500.jpg",
        url: "First To Eleven - Space Song.mp3"
    },
    {
        title: "i like the way you kiss me",
        artist: "Artemas",
        cover: "https://cdn-images.dzcdn.net/images/cover/f54667e66c6f87d924391a92efb422d2/0x1900-000000-80-0-0.jpg",
        url: "Artemas - i like the way you kiss me.mp3"
    },
    {
        title: "Notion  ",
        artist: "The Rare Occasions   ",
        cover: "  https://i1.sndcdn.com/artworks-5zcynQU8TTNxz8VB-pdsd7w-t500x500.jpg ",
        url: "The Rare Occasions - Notion.mp3  "
    },
    {
        title: "CAR FONK",
        artist: "Mix2025",
        cover: "https://i.pinimg.com/474x/47/c6/8f/47c68f7ff53f38e1b87994a6fafdccdc.jpg",
        url: "aggressive-phonk-phonk-2025-mix-239735.mp3"
    },
    {
        title: "Федерико Феллини",
        artist: "Galibri & Mavik",
        cover: "https://pic.latvijasradio.lv/public/assets/media/b/b/square_44ef7f5b.jpg",
        url: "Galibri & Mavik - Федерико Феллини (1).mp3"

    },
    {
        title: "Дарите Женщинам Цветы",
        artist: "Jazzdauren",
        cover: "https://avatars.yandex.net/get-music-content/9707577/d1ffffe7.a.25950517-1/300x300",
        url: "Jazzdauren - Дарите Женщинам Цветы.mp3"
    },
    {
        title: "burn-funk",
        artist: "Phonk Master",
        cover: "https://i.scdn.co/image/ab67616d0000b273f1b83f2b86255f5488f77004",
        url: "Phonk Montagem Phonk Ultra Vol 9.mp3"
    },
    {
        title: "Горький Вкус",
        artist: "Султан Лагучев",
        cover: "https://www.meme-arsenal.com/memes/b1f9d911b6ab07f74ab055543550c64a.jpg",
        url: "Султан Лагучев - Горький Вкус.mp3"
    },
    {
        title: "Ягода Малинка",
        artist: "Хабиб",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrfrdeUlo4H5j4KSz6y0UOMpM5f0aLMS9lQ&s",
        url: "Хабиб - Ягода Малинка.mp3"
    },

    {
        title: "burn-funk",
        artist: "Phonk Master",
        cover: "https://lastfm.freetls.fastly.net/i/u/300x300/d7d862b2a8ace490f10e969599e7dd12",
        url: "Phonk Montagem Phonk Ultra Vol 14.mp3"
    },
    {
        title: " drift-phonk ",
        artist: "2025mix   ",
        cover: " https://i.pinimg.com/736x/9c/f1/ac/9cf1ac61b0be5240b1b441fa2e78bc3c.jpg  ",
        url: " drift-phonk-2-phonk-2025-mix-178692.mp3  "
    },
    {
        title: " drift-rush-house ",
        artist: "2025mix   ",
        cover: " https://i1.sndcdn.com/artworks-000570883103-b6ad3p-t500x500.jpg  ",
        url: " drift-rush-house-phonk-phonk-2025-mix-164907.mp3  "
    },
    {
        title: " Чак Норрис ",
        artist: "Galibri & Mavik",
        cover: " https://i1.sndcdn.com/artworks-R1U0LqeOCKXFijAC-eWnCMQ-t240x240.jpg  ",
        url: "  Galibri & Mavik - Чак Норрис.mp3 "
    },
    {
        title: "Minor  ",
        artist: " MiyaGi & Andy Panda  ",
        cover: "  https://yho.moe/wp-content/uploads/2020/07/01-Minor-Miyagi-and-Andy-Panda-770x770.jpg ",
        url: "  MiyaGi & Andy Panda - Minor.mp3 "
    },
    {
        title: "5x30  ",
        artist: " pione_  ",
        cover: " https://i1.sndcdn.com/artworks-h9f0M2VHMs6ziXbt-z8y23Q-t500x500.png  ",
        url: " pione_-_5x30_(musmore.org).mp3  "
    },
    {
        title: "MONTAGEM TOMADA  ",
        artist: " MXZI  ",
        cover: " https://c.saavncdn.com/697/MONTAGEM-TOMADA-English-2025-20250410201321-500x500.jpg",
        url: "MXZI - MONTAGEM TOMADA.mp3  "
    },
    {
        title: "Derniere Danse Funk  ",
        artist: " Mc Kraken  ",
        cover: "  https://source.boomplaymusic.com/group10/M00/02/14/bc88e39409a94ab596eaae9ba9145da7_464_464.jpg ",
        url: "Mc Kraken Derniere Danse Funk.mp3  "
    },
    {
        title: "  real-moonshine-funk",
        artist: "dj-robe  ",
        cover: " https://cdn-images.dzcdn.net/images/cover/dd06df5f8e151aa220eff9d731ea9201/0x1900-000000-80-0-0.jpg  ",
        url: " dj-robe-wxrmane-real-moonshine-funk-2-1741575429.mp3 "
    },
    {
        title: "Louca Encubada  ",
        artist: "  Dj Samir ",
        cover: " https://cdn-images.dzcdn.net/images/cover/a52ca522a1e183be0c130d1bf82a9b86/1900x1900-000000-80-0-0.jpg  ",
        url: " Dj Samir - Louca Encubada.mp3 "
    },
    {
        title: " Aurea Cosmica Japanese Funk ",
        artist: "Dj Ksx ",
        cover: " https://source.boomplaymusic.com/group10/M00/08/16/bba565e43b074722b6f38ae17fa06506H3000W3000_464_464.jpg  ",
        url: "Dj Ksx 07 Aurea Cosmica Japanese Funk (Slowed).mp3  "
    },
    {
        title: " unk da montanha slowed ",
        artist: " chipbagov SCARIONIX  ",
        cover: "https://avcdn.av.by/advertpreview/0000/5384/1526.jpeg  ",
        url: " chipbagov SCARIONIX - Funk da montanha slowed.mp3 "
    },

    {
        title: " ACIDO ",
        artist: " UdieNnx  ",
        cover: "  https://i.scdn.co/image/ab67616d0000b27323940e6c2a660abff3fd6415 ",
        url: "UdieNnx - ACIDO.mp3  "
    },
    {
        title: " Забила на стресс ",
        artist: " Sabi  ",
        cover: " https://i1.sndcdn.com/artworks-gmugAyilmrn8OsX2-Y7KUhg-t240x240.jpg  ",
        url: "Sabi - Забила на стресс я делаю лям.mp3  "
    },
    {
        title: " POOR ",
        artist: "GQTIS   ",
        cover: "https://i.scdn.co/image/ab67616d00001e02043d45657a421bb8898e6e02   ",
        url: " GQTIS_POOR.mp3 "
    },
    {
        title: " Ainsi Bas La Vida ",
        artist: "Indila   ",
        cover: " https://i1.sndcdn.com/artworks-jztYBM0ZnXiCp7tl-scSzyg-t500x500.jpg  ",
        url: "Indila - Ainsi Bas La Vida.mp3  "
    },
    {
        title: "   Cute Depressed",
        artist: " Dyan Dxddy  ",
        cover: " https://cdn-images.dzcdn.net/images/cover/782857740879ff07ab9a8892b5602897/1900x1900-000000-80-0-0.jpg  ",
        url: "Dyan Dxddy Cute Depressed.mp3  "
    },


];

const container = document.getElementById("tracksContainer");
const searchInput = document.getElementById("searchInput");
const audioPlayer = document.getElementById("audioPlayer");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const repeatBtn = document.getElementById("repeatBtn");
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");

let repeatMode = false;
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const player = document.getElementById("player");
const playerCover = document.getElementById("playerCover");
const closePlayer = document.getElementById("closePlayer");
const volumeControl = document.getElementById("volumeControl");
const visualizer = document.getElementById("visualizer");
const ctx = visualizer.getContext("2d");
const playerContent = document.getElementById("playerContent");

let audioContext;
let analyser;
let source;
let dataArray;
let currentTrackUrl = null;
let isPlaying = false;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderTracks(filter = "") {
    container.innerHTML = "";

    const filtered = tracks.filter(t =>
        t.title.toLowerCase().includes(filter.toLowerCase()) ||
        t.artist.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(track => {
        const div = document.createElement("div");
        div.className = "track";

        const isCurrent = track.url === currentTrackUrl;
        const btnLabel = isCurrent ? (isPlaying ? "⏸ Пауза" : "▶ Воспроизвести") : "▶ Воспроизвести";

        div.innerHTML = `
    <img src="${track.cover}" alt="${track.title}">
    <strong>${track.title}</strong>
    <em>${track.artist}</em>
    <button class="play-btn">${btnLabel}</button>
    <a href="${track.url}" download>
        <button>⬇ Скачать</button>
    </a>
`;



        container.appendChild(div);
        div.addEventListener("click", (e) => {

    if (
        e.target.closest(".play-btn") ||
        e.target.closest("a")
    ) {
        return;
    }

    playBtn.click();
});

        const playBtn = div.querySelector(".play-btn");
        playBtn.addEventListener("click", () => {

            if (currentTrackUrl === track.url) {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    isPlaying = true;
                    trackTitle.textContent = track.title;
                    trackArtist.textContent = track.artist;
                    playPauseBtn.textContent = "⏸";
                } else {
                    audioPlayer.pause();
                    isPlaying = false;
                    trackTitle.textContent = track.title;
                    trackArtist.textContent = track.artist;
                    playPauseBtn.textContent = "▶";
                }
            } else {
                audioPlayer.src = track.url;
                audioPlayer.play();
                player.classList.remove("hidden-player");
                playerCover.src = track.cover;
                

                trackTitle.textContent = track.title;
                trackArtist.textContent = track.artist;
                setupVisualizer();
                currentTrackUrl = track.url;
                isPlaying = true;
                trackTitle.textContent = track.title;
                trackArtist.textContent = track.artist;
                playPauseBtn.textContent = "⏸";
            }

            renderTracks(searchInput.value);
        });
    });
}

playPauseBtn.addEventListener("click", () => {
    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.textContent = "⏸";
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.textContent = "▶";
    }

    renderTracks(searchInput.value);

});

audioPlayer.addEventListener("timeupdate", () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    progressBar.style.width = percent + "%";
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    durationEl.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

progressContainer.addEventListener("click", (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = clickX / width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
});

searchInput.addEventListener("input", () => {
    renderTracks(searchInput.value);
});


renderTracks();

audioPlayer.addEventListener("ended", () => {

    if (repeatMode) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        return;
    }

    if (!currentTrackUrl) return;

    const currentIndex =
        tracks.findIndex(
            t => t.url === currentTrackUrl
        );

    const nextIndex = currentIndex + 1;

    if (nextIndex < tracks.length) {

        const nextTrack = tracks[nextIndex];

        audioPlayer.src = nextTrack.url;
        currentTrackUrl = nextTrack.url;

        playerCover.src = nextTrack.cover;
        trackTitle.textContent = nextTrack.title;
        trackArtist.textContent = nextTrack.artist;

        audioPlayer.play();

        isPlaying = true;
        playPauseBtn.textContent = "⏸";

    } else {

        isPlaying = false;
        playPauseBtn.textContent = "▶";
        progressBar.style.width = "0%";
        currentTrackUrl = null;
    }

    renderTracks(searchInput.value);
});



// Прокрутка к треку по индексу
function scrollToTrack(index) {
    const trackElements = container.querySelectorAll(".track");
    if (trackElements.length > index) {
        trackElements[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value;
});


// Обработка кнопок перехода к строкам (по индексу)
document.querySelectorAll(".jumpBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index, 10);
        scrollToTrack(index);
    });
});
closePlayer.addEventListener("click", () => {
    audioPlayer.pause();
    player.classList.add("hidden-player");
    playPauseBtn.textContent = "▶";
});
nextBtn.addEventListener("click", () => {
    if (!currentTrackUrl) return;

    const currentIndex = tracks.findIndex(
        t => t.url === currentTrackUrl
    );

    const nextIndex = (currentIndex + 1) % tracks.length;

    const nextTrack = tracks[nextIndex];

    audioPlayer.src = nextTrack.url;
    currentTrackUrl = nextTrack.url;

    playerCover.src = nextTrack.cover;
    trackTitle.textContent = nextTrack.title;
    trackArtist.textContent = nextTrack.artist;
    setupVisualizer();
    audioPlayer.play();

    renderTracks(searchInput.value);
});
prevBtn.addEventListener("click", () => {
    if (!currentTrackUrl) return;

    const currentIndex = tracks.findIndex(
        t => t.url === currentTrackUrl
    );

    const prevIndex =
        currentIndex === 0
            ? tracks.length - 1
            : currentIndex - 1;

    const prevTrack = tracks[prevIndex];

    audioPlayer.src = prevTrack.url;
    currentTrackUrl = prevTrack.url;

    playerCover.src = prevTrack.cover;
    trackTitle.textContent = prevTrack.title;
    trackArtist.textContent = prevTrack.artist;
    setupVisualizer();
    audioPlayer.play();

    renderTracks(searchInput.value);
});
document.addEventListener("keydown", (e) => {

    // Пробел
    if (e.code === "Space") {
        e.preventDefault();

        if (!audioPlayer.src) return;

        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    // Следующий трек
    if (e.code === "ArrowRight") {
        nextBtn.click();
    }

    // Предыдущий трек
    if (e.code === "ArrowLeft") {
        prevBtn.click();
    }

    // Громче
    if (e.code === "ArrowUp") {
        volumeControl.value = Math.min(
            1,
            parseFloat(volumeControl.value) + 0.1
        );

        audioPlayer.volume = volumeControl.value;
    }

    // Тише
    if (e.code === "ArrowDown") {
        volumeControl.value = Math.max(
            0,
            parseFloat(volumeControl.value) - 0.1
        );

        audioPlayer.volume = volumeControl.value;
    }

    // Назад 10 сек
    if (e.code === "KeyJ") {
        backwardBtn.click();
    }

    // Вперёд 10 сек
    if (e.code === "KeyL") {
        forwardBtn.click();
    }

});
// Стрелка вверх = громче


// Стрелка вниз = тише

// Назад на 10 секунд
backwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(
        0,
        audioPlayer.currentTime - 10
    );
});

// Вперёд на 10 секунд
forwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(
        audioPlayer.duration || 0,
        audioPlayer.currentTime + 10
    );
});
// J = назад на 10 секунд


// L = вперёд на 10 секунд
function setupVisualizer() {

    if (audioContext) return;

    audioContext = new AudioContext();

    source = audioContext.createMediaElementSource(audioPlayer);

    analyser = audioContext.createAnalyser();

    analyser.fftSize = 256;

    source.connect(analyser);

    analyser.connect(audioContext.destination);

    const bufferLength = analyser.frequencyBinCount;

    dataArray = new Uint8Array(bufferLength);

    drawVisualizer();
}
function drawVisualizer() {

    requestAnimationFrame(drawVisualizer);

    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);

    const width = visualizer.width;
    const height = visualizer.height;

    ctx.clearRect(0, 0, width, height);

    const barWidth = width / dataArray.length;

    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {

        const barHeight =
            (dataArray[i] / 255) * height;

        const gradient = ctx.createLinearGradient(
            0,
            height,
            0,
            0
        );

        gradient.addColorStop(0, "#01223d");
        gradient.addColorStop(0.3, "#0344a5a1");
        gradient.addColorStop(0.7, "#036ca8");
        gradient.addColorStop(1, "#011030");

        ctx.fillStyle = gradient;

        ctx.fillRect(
            x,
            height - barHeight,
            barWidth - 2,
            barHeight
        );

        x += barWidth;
    }
}
function resizeVisualizer() {

    visualizer.width =
        visualizer.offsetWidth;

    visualizer.height =
        visualizer.offsetHeight;
}

resizeVisualizer();

window.addEventListener(
    "resize",
    resizeVisualizer
);
repeatBtn.addEventListener("click", () => {
    repeatMode = !repeatMode;

    repeatBtn.classList.toggle(
        "active-repeat",
        repeatMode
    );
});
player.addEventListener("click", (e) => {

    // Не реагируем на кнопки
    if (e.target.closest("button")) return;

    // Не реагируем на прогресс-бар
    if (e.target.closest("#progressContainer")) return;

    // Не реагируем на громкость
    if (e.target.closest("#volumeControl")) return;

    // Не реагируем на сам аудио элемент
    if (e.target.closest("audio")) return;

    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.textContent = "⏸";
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.textContent = "▶";
    }

    renderTracks(searchInput.value);
});
