function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.5
    );
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
