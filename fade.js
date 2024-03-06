function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
    const targets = document.querySelectorAll('.project');
    let delay = 0;
    targets.forEach((el) => {
        if (isInViewport(el)) {
            setTimeout(() =>{
                el.classList.add('show');
            }, delay);
            delay += 100;
        }
    });
}

handleScroll();

window.addEventListener('scroll', handleScroll);
