window.addEventListener('load', ()=>{

    let url = window.location.href.split("/")[3];
    console.log(url)
    let _main_game = document.querySelector('.main_game');

    _main_game.style.backgroundImage = `/assets/img/${url}.jpg`



})