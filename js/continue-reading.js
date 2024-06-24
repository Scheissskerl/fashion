function readMore() {
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.more');
    let btn = document.querySelector('.cards__about-autor-btn');

    if (dots.style.display !== 'none') {
        dots.style.display = 'none';
        btn.innerHTML = 'Hidden';
        more.style.display = 'inline';
    } else {
        dots.style.display = 'inline';
        btn.innerHTML = 'Continue Reading';
        more.style.display = 'none';
    }
}