// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark.css';
            themeToggle.innerText = '开启光明模式';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light.css';
            themeToggle.innerText = '开启黑暗模式';

        }
    })
})