function toggleMenuWhenTooBig() {
    menuPanel = document.querySelector('#menupanel');
    if (window.innerWidth < 900){
        if (menuPanel.classList.contains('show')) {
            menuPanel.classList.toggle('show');
            menubtn.setAttribute('src', 'images/menu.png')
        }
    }
}

window.addEventListener("resize", toggleMenuWhenTooBig);