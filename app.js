const adv1 = document.querySelector('#adv1');
const adv2 = document.querySelector('#adv2');
const reset = document.querySelector('#reset');
const placarAdv1 = document.querySelector('#adv1Placar');
const placarAdv2 = document.querySelector('#adv2Placar');

const game = document.querySelector('#games');

let scoreAdv1 = 0;
let scoreAdv2 = 0;
let inputScore = 0;


const select = document.querySelector('select')
const h3 = document.querySelector('h3');

const input = document.querySelector('input')

adv1.addEventListener('click', () => {
    scoreAdv1 += 1;
    placarAdv1.innerText = scoreAdv1;
    game.disabled = true;
    input.disabled = true;

    if (scoreAdv1 == game.value || scoreAdv1 == inputScore) {
        h3.textContent = 'Player 1 Winning';
        adv1.disabled = true;
        adv2.disabled = true;
        placarAdv1.style.color = 'green';
        placarAdv2.style.color = 'red';
        h3.style.color = 'green';
        reset.textContent = 'New Game'
    }
});

adv2.addEventListener('click', () => {
    scoreAdv2 += 1;
    game.disabled = true;
    input.disabled = true;
    placarAdv2.innerText = scoreAdv2;

    if (scoreAdv2 == game.value || scoreAdv2 == inputScore) {
        h3.textContent = 'Player 2 Win';
        select.insertAdjacentElement('afterend', h3)
        adv1.disabled = true;
        adv2.disabled = true;
        input.disabled = true;
        placarAdv1.style.color = 'red';
        placarAdv2.style.color = 'green';
        h3.style.color = 'green';
        reset.textContent = 'New Game'
    }
});

reset.addEventListener('click', () => {
    scoreAdv1 = 0;
    scoreAdv2 = 0;
    input.value = 0;
    placarAdv1.innerText = '0';
    placarAdv2.innerText = '0';
    adv1.disabled = false;
    adv2.disabled = false;
    game.disabled = false;
    input.disabled = false;
    placarAdv1.style.color = 'black';
    placarAdv2.style.color = 'black';
    h3.style.color = '#001d3d'
    h3.textContent = 'Click the button to count the score'
    reset.textContent = 'Reset'
    input.style.display = 'none'
    game.style.display = 'inline'

});


game.addEventListener('click', () => {
    if (game.value == 'g') {
        game.style.display = 'none'
        input.style.display = 'block'
        input.addEventListener('input', () => {
            inputScore = input.value;
        });
    }
})