// Exercícios 1 e 2
var i = 0;
var nomes = ["Diego", "Gabriel", "Lucas"];
addElement();

var btnElement = document.querySelector('button[id=btnCriarElemento]');
btnElement.onclick = function () {
    var containerElement = document.createElement('div');
    containerElement.setAttribute('id', 'app' + i);

    containerElement.style.backgroundColor = '#f00';
    containerElement.style.width = '100px';
    containerElement.style.height = '100px';
    containerElement.style.margin = '5px';

    containerElement.onmouseover = function () {
        containerElement.style.backgroundColor = getRandomColor();
    }

    var boxElement = document.querySelector('.box');
    boxElement.appendChild(containerElement);
    i += 1;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Exercícios 3 e 4
function adicionar() {
    var inputElement = document.querySelector('input[name=nome]');
    nomes.push(inputElement.value);
    inputElement.value = '';
    var listElement = document.querySelector('ul[id=nomes]');
    listElement.remove();
    addElement();
}

function addElement() {
    var containerElement = document.querySelector('.list');
    var listElement = document.createElement('ul');
    listElement.setAttribute('id', 'nomes');
    containerElement.appendChild(listElement);

    for (var i = 0; i < nomes.length; i++) {
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(nomes[i]);
        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
    }
}