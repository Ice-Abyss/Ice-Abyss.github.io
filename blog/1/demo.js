
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'ふたりの気持ち',
        artist: '和田薫 (わだかおる)',
        url: 'ふたりの気持ち.mp3',
        cover: 'music.png',
        theme: '#eee'
    }]
});