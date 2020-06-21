var menubtn = document.getElementById('menu_btn');
var menu = document.getElementById('desktopnav');

menubtn.addEventListener('click',()=>{
    menu.style.transform =  menu.getBoundingClientRect() .x < 0  && `translateX(0)`
    menu.style.transform =  menu.getBoundingClientRect() .x === 0  && `translateX(-100%)`
})