function toggleMenuWhenTooBig() {
    if (window.innerWidth < 900){
        menuPanel = document.querySelector('#menupanel');
        if (menuPanel.classList.contains('show')) {
            menuPanel.classList.toggle('show');
            menubtn.setAttribute('src', 'images/menu.png')
        }
    }
}

window.addEventListener("resize", toggleMenuWhenTooBig);