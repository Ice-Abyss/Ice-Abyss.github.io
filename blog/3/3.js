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


// window.onload=function(){
//     var topbtn = document.getElementById("btn");
//     var timer = null;
//     topbtn.onclick=function(){
//         timer = setInterval(function() {
//             var backtop = document.body.scrollTop;
//             document.body.scrollTop -=100;
//         }, 30);
//     }
// }









// var btn =document.getElementsByClassName("btn")[0];
// window.onscroll=function(){
//     var top = document.documentElement.scrollTop;
//     top >1000 ? btn.style.right="20px":btn.style.right="-50px"
// }
// btn.onclick = function(){
//     var settime = setTimeout(()=>{
//         var top = document.documentElement.scrollTop;
//         top > 0 ? document.documentElement.scrollTop = top - 50 : clearInterval(settime);
//     },2)
// }