// Chamando os botões
const adv1 = document.querySelector('#adv1');
const adv2 = document.querySelector('#adv2');
const reset = document.querySelector('#reset');
const placarAdv1 = document.querySelector('#adv1Placar');
const placarAdv2 = document.querySelector('#adv2Placar');

// Chamando a Select
const game = document.querySelector('#games');

// Placar do jogo
let scoreAdv1 = 0;
let scoreAdv2 = 0;

adv1.addEventListener('click', () => {
    scoreAdv1 += 1;
    placarAdv1.innerText = scoreAdv1;
    game.disabled = true;
    if (scoreAdv1 == game.value) {
        const label = document.createElement('label');
        label.textContent = 'Parabéns Primeiro Jogador';
        document.body.appendChild(label);
        adv1.disabled = true;
        adv2.disabled = true;
        placarAdv1.style.color = 'green';
        placarAdv2.style.color = 'red';
    }
});

adv2.addEventListener('click', () => {
    scoreAdv2 += 1;
    game.disabled = true;
    placarAdv2.innerText = scoreAdv2;
    if (scoreAdv2 == game.value) {
        const label = document.createElement('label');
        label.textContent = 'Parabéns Segundo Jogador';
        document.body.appendChild(label);
        adv1.disabled = true;
        adv2.disabled = true;
        placarAdv1.style.color = 'red';
        placarAdv2.style.color = 'green';
    }
});

reset.addEventListener('click', () => {
    scoreAdv1 = 0;
    scoreAdv2 = 0;
    placarAdv1.innerText = '0';
    placarAdv2.innerText = '0';
    adv1.disabled = false;
    adv2.disabled = false;
    game.disabled = false;
    placarAdv1.style.color = 'black';
    placarAdv2.style.color = 'black';
});
