
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'Kiss the Rain',
        artist: '李闰珉 (이루마)',
        url: 'Kiss the Rain.mp3',
        cover: 'imgs/music.png',
        theme: '#eee'
    }]
});