let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let dragonLeft = document.getElementById('dragon-left');
let enemyRight = document.getElementById('enemy-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    dragonLeft.style.left = value * 0.5 + 'px';
    enemyRight.style.left = value * -0.5 + 'px';
});