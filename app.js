// Chamando os botoes
const adv1 = document.querySelector('#adv1');
const adv2 = document.querySelector('#adv2');
const reset = document.querySelector('#reset');
const placarAdv1 = document.querySelector('#adv1Placar');
const placarAdv2 = document.querySelector('#adv2Placar');

// Chamando a Select
const game = document.querySelector('#games')

// Placar do jogo
let scoreAdv1 = 0;
let scoreAdv2 = 0;

adv1.addEventListener('click',()=>{
    scoreAdv1 += 1
    placarAdv1.innerText = scoreAdv1;
})

adv2.addEventListener('click', ()=>{
    scoreAdv2 += 1
    placarAdv2.innerText = scoreAdv2
})

reset.addEventListener('click',()=>{
    placarAdv1.innerText = 0
    placarAdv2.innerText = 0
})


