
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: '木漏れ日のささやき',
        artist: '水月陵 (みずつき りょう)',
        url: '木漏れ日のささやき.mp3',
        cover: 'images/music.png',
        theme: '#eee'
    }]
});