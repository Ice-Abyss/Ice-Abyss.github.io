
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'かたわれ時',
        artist: 'RADWIMPS (ラッドウィンプス)',
        url: 'かたわれ時.mp3',
        cover: 'images/music.png',
        theme: '#eee'
    }]
});