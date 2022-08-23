
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'Bloom of Youth',
        artist: 'Key Sounds Label (キー・サウンズ・レーベル)',
        url: 'Bloom of Youth.mp3',
        cover: 'imgs/music.png',
        theme: '#eee'
    }]
});