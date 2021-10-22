let title = document.querySelector('.product h1');
let container = document.querySelector('.product .container');

const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadow: false,
    highlight: false,
    shadowScale: 1.05,
    rotateXMax: 20,
    rotateYMax: 20,
    onEnter() {
        title.style.transform = 'scale(1.15) translateX(-90px)';
        container.classList.add('add-border');
    },
    onLeave() {
        title.style.transform = 'scale(1) translateX(-90px)';
        container.classList.remove('add-border');
    },
    onRotate(x, y) {
        console.log('Rotate', x, y);
    }
});