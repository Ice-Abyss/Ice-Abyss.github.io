
// Normal
const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'Illusionary Daytime',
        artist: 'Shirfine',
        url: 'Illusionary Daytime.mp3',
        cover: 'imgs/music.png',
        theme: '#eee'
    }]
});