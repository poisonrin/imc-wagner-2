//`<p>${frase}</p>`


//recuperar dados do formulário
const val = document.querySelector('#forms');

val.addEventListener('reset', function(e){
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
});

val.addEventListener('submit', function(coisa){
    coisa.preventDefault();

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    if(!peso){
        setMostra('Peso Inválido', false);
        return;
    }
    if(!altura){
        setMostra('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classeImc = getClasseImc(imc);
    const msg = `Seu IMC é ${imc} e sua classificação é ${classeImc}`;

    setMostra(mensagem, true);
});

function getClasseImc(imc){
    const classe = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obeso', 'Obeso Mórbido'];

    if(imc > 40) return classe[4];
    if(imc >= 39) return classe[3];
    if(imc >= 25) return classe[2];
    if(imc >= 18.5) return classe[1];
    if(imc < 18.5) return classe[0];

};

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc, toFixed(2);
}

function setMostra(frase, verifica){
    const mensagem = document.querySelector('#resultado');
    mensagem.innerHTML = '';

    const parag = criaP();

    verifica ? parag.classList.add('sim') : parag.classList.add('nao');

    parag.innerHTML = frase;

    mensagem.appendChild(parag);
};

function criaP(){
    const p = document.createElement('p');

    return p;
}