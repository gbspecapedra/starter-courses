// Exercicio 1
var inputElement1 = document.querySelector('#exercicio1 input');
var btnElement1 = document.querySelector('#exercicio1 button');
var containerElement1 = document.querySelector('#exercicio1 div');

btnElement1.onclick = function () {
  checaIdade(inputElement1.value)
    .then(function () {
      maioridade("Maior que 18");
    })
    .catch(function () {
      maioridade("Menor que 18");
    });
}

function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      setTimeout(resolve, 2000);
    } else {
      setTimeout(reject, 2000);
    }
  });
}

function maioridade(texto) {
  var pElement = document.querySelector('#exercicio1 div p');
  if (pElement !== null) pElement.remove();
  pElement = document.createElement('p');
  var textP = document.createTextNode(texto);
  pElement.appendChild(textP);
  containerElement1.appendChild(pElement);
}


// Exercicio 2 e 3
var inputElement2e3 = document.querySelector('#exercicio2e3 input[name=user]');
var btnElement2e3 = document.querySelector('#exercicio2e3 button');
var containerElement2e3 = document.querySelector('#exercicio2e3 div ul');

function buscar() {
  axios.get('https://api.github.com/users/' + inputElement2e3.value + '/repos')
    .then(function (response) {
      repositorios(response);
    })
    .catch(function () {
      console.log('Usuário não existe!');
    });
}

function repositorios(resp) {
  console.log(resp);
  if (resp.request.readyState === 4) {
    containerElement2e3.innerHTML = '';
    itemList("Carregando...");
    if (resp.status === 200) {
      containerElement2e3.innerHTML = '';
      for (const repo of resp.data) {
        itemList(repo.name);
      }
    }
  }
}

function itemList(item) {
  var listElement = document.createElement('li');
  var listText = document.createTextNode(item);
  listElement.appendChild(listText);
  containerElement2e3.appendChild(listElement);
  inputElement2e3.value = '';
}
