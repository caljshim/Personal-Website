document.addEventListener('DOMContentLoaded'), (event) => {
    document.querySelector('.falling-text').classList.add('animate');
}

function openTab(evt, tabName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function loadTab(fileName) {
    window.location.href = fileName;
}

function clickMenu() {
    menubtn = document.getElementById("menubtn");
    src = menubtn.getAttribute('src');
    menupanel = document.getElementById("menupanel");
    if (src == "images/close.png"){
        menubtn.setAttribute('src', 'images/menu.png');
        if (window.scrollY > 0) {
            document.querySelector("#tab").style.height = "80px";
            document.querySelector(".calebshim").style.fontSize = "20px";
            document.querySelector(".calebshim").style.top = "20px";
            document.querySelector(".calebshim").style.lineHeight = "20px";
            document.querySelector(".tabcontainer").style.margin = "25px 0px";
            document.querySelector("#menubtn").style.top = "25px";
        }
    }
    else{
        menubtn.setAttribute('src', 'images/close.png');
        menupanel.style.zIndex = '99';
        menupanel.style.top = "130px";
        document.querySelector("#tab").style.height = "130px";
        document.querySelector(".calebshim").style.fontSize = "30px";
        document.querySelector(".calebshim").style.top = "35px";
        document.querySelector(".calebshim").style.lineHeight = "30px";
        document.querySelector(".tabcontainer").style.margin = "50px 0px";
        document.querySelector("#menubtn").style.top = "50px";
    }

    menuPanel = document.querySelector('#menupanel');
    menuPanel.classList.toggle('show');
}