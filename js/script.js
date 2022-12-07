const inputNovoItem = document.querySelector('input');
const botaoAdicionarItem = document.querySelector('button');
const itensDaLista = document.querySelector('.itensDaLista');


inputNovoItem.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') {
        return;
    }

    adicionarNovoItem();
});

botaoAdicionarItem.addEventListener('click', () => {
    adicionarNovoItem();
});

function adicionarNovoItem() {
    const nomeItem = inputNovoItem.value;

    if (!nomeItem) {
        return;
    }

    const divItem = document.createElement('div');
    divItem.classList.add('item');

    const spannomeItem = document.createElement('span');
    spannomeItem.textContent = nomeItem;

    const enviarParaLixeira = document.createElement('img');
    enviarParaLixeira.src = 'assets/lixeira.svg';
    enviarParaLixeira.alt = 'remove';

    divItem.appendChild(spannomeItem);
    divItem.appendChild(enviarParaLixeira);

    itensDaLista.appendChild(divItem);

    inputNovoItem.value = '';

    enviarParaLixeira.addEventListener('click', () => {
        itensDaLista.removeChild(divItem);
    })
}