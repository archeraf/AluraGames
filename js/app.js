function alterarStatus(idJogo){
    let jogo = document.getElementById(`game-${idJogo}`);
    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let btnJogo = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
    let devolvido = false;

    if(imagemJogo.classList.contains('dashboard__item__img--rented')){
        imagemJogo.classList.remove('dashboard__item__img--rented');
        devolvido = true;
    } else{
        imagemJogo.classList.add('dashboard__item__img--rented');
    }

    if(btnJogo.classList.contains('dashboard__item__button--return')){
        btnJogo.textContent = 'Alugar';
        btnJogo.classList.remove('dashboard__item__button--return');
    } else{
        btnJogo.textContent = 'Devolver';
        btnJogo.classList.add('dashboard__item__button--return');
    }

    if(devolvido){
        alert('Sua devolução foi efetuada com sucesso!');
    }
    
    listarJogos(nomeJogo.textContent, devolvido);
}

let jogos = ['Takenoko'];
function listarJogos(nome, devolvido){
    if(devolvido){
        jogos.splice(jogos.indexOf(nome),1);
    } else{
        jogos.push(nome);
    }

    console.log(jogos);
}