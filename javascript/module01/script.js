// Exercício 1
function ex1() {
  var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  var containerElement = document.querySelector('#exercicio1 div');
  var pElement = document.createElement('p');
  var textElement = document.createTextNode('O usuário mora em ' +
    endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro
    + ', na "' + endereco.rua + '" com nº ' + endereco.numero + '.');
  pElement.appendChild(textElement);
  containerElement.appendChild(pElement);
}
ex1();

// Exercício 2
var xElement = document.querySelector('#exercicio2 input[id=x]');
var yElement = document.querySelector('#exercicio2 input[id=y]');
var btnElementPares = document.querySelector('#exercicio2 button');
btnElementPares.onclick = function () {
  pares(xElement.value, yElement.value);
}

function pares(x, y) {
  let pares = '';
  if (x !== '' || y !== '') {
    for (var i = x; i <= y; i++) {
      if (i % 2 === 0) {
        pares += i.toString() + ', ';
      }
    }
  }
  mostraPares(pares);
}

function mostraPares(pares) {
  var pElement = document.querySelector('#exercicio2 div p');
  if (pElement != null) pElement.remove();
  var containerElement = document.querySelector('#exercicio2 div');
  pElement = document.createElement('p');
  var textElement = document.createTextNode((pares !== '') ? 'Nros pares: ' + pares : 'Intervalo vazio!');
  pElement.appendChild(textElement);
  containerElement.appendChild(pElement);
}

// Exercício 3
var skills = ["Javascript", "ReactJS", "React Native"];
var skillElement = document.querySelector('#exercicio3 input');
var btnElementSkill = document.querySelector('#exercicio3 button');
btnElementSkill.onclick = function () {
  var pElement = document.querySelector('#exercicio3 div p');
  if (pElement != null) pElement.remove();
  var containerElement = document.querySelector('#exercicio3 div');
  pElement = document.createElement('p');
  var textElement;
  if (temHabilidade(skillElement.value)) {
    textElement = document.createTextNode('True');
  } else {
    textElement = document.createTextNode('False');
  }
  pElement.appendChild(textElement);
  containerElement.appendChild(pElement);
}

function temHabilidade(skill) {
  if (skill !== '') {
    if (skills.indexOf(skill) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

// Exercício 4
var expElement = document.querySelector('#exercicio4 input');
var btnElementExp = document.querySelector('#exercicio4 button');
btnElementExp.onclick = function () {
  let exp = experiencia(expElement.value);
  var pElement = document.querySelector('#exercicio4 div p');
  if (pElement != null) pElement.remove();
  var containerElement = document.querySelector('#exercicio4 div');
  pElement = document.createElement('p');
  var textElement = document.createTextNode('Experiência do usuário: ' + exp);
  pElement.appendChild(textElement);
  containerElement.appendChild(pElement);
}

function experiencia(anos) {
  if (anos >= 0 && anos < 1) {
    return 'Iniciante';
  } else if (anos >= 1 && anos < 3) {
    return 'Intermediário';
  } else if (anos >= 3 && anos <= 6) {
    return 'Avançado';
  } else if (anos >= 7) {
    return 'Jedi Master';
  } else {
    return 'Sem experiência!';
  }
}

// Exercício 5
function ex5() {
  var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];

  var containerElement = document.querySelector('#exercicio5 div');
  for (const i of usuarios) {
    var pElement = document.createElement('p');
    var textElement = document.createTextNode('O ' + i.nome + ' possui as habilidades: ' + i.habilidades.join(', '));
    pElement.appendChild(textElement);
    containerElement.appendChild(pElement);
  }
}
ex5();
