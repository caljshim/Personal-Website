const tabContainer = document.querySelector(".tabcontainer");
const calebshim = document.querySelector(".calebshim");

function changeTabSize() {
    if (window.scrollY > 0) {
        document.querySelector("#tab").style.height = "80px";
        calebshim.style.fontSize = "20px";
        calebshim.style.top = "20px";
        document.querySelector(".tabcontainer").style.margin = "25px 0px";
        document.querySelector(".tabcontent").style.marginTop = "80px";
        document.querySelector("#menubtn").style.top = "25px";
    }
    else{
        document.querySelector("#tab").style.height = "130px";
        calebshim.style.fontSize = "30px";
        calebshim.style.top = "35px";
        document.querySelector(".tabcontainer").style.margin = "50px 0px";
        document.querySelector(".tabcontent").style.marginTop = "130px";
        document.querySelector("#menubtn").style.top = "50px";
    }
}

function toggleMenu() {
    if (document.querySelector('#menupanel').classList.contains('show')){
        menuPanel.classList.toggle('show');
        menubtn.setAttribute('src', 'images/menu.png')
    }
}

changeTabSize();

window.addEventListener('scroll', changeTabSize);
window.addEventListener('scroll', toggleMenu);