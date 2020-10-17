/*
`ES`, significa EcmaScript; `6` é a versão, ou seja, o ano + 1;
ES6(2015); ES7(2016), ES8(2017);

> O que é ES6 ?
  É um conjunto de regras, é o que formula novas funcionalidades do javascript;
São novas formas de escrever o javascript;

> Babel
Converte o ES para uma forma que o javascript entendia anteriormente, pois nem
nem todas as plataformas entendem essas novas formas / funcionalidades;
*/

//---- Classes ----//
class List {
  constructor() {
    this.usuario = 'Gisele';
  }
}

class TodoList extends List { //classe extend herança
  constructor() {
    super(); //acessar a classe pai
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo Todo from ' + this.usuario);
    console.log(this.todos);
  }
}

var minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
  minhaLista.addTodo();
}

//método estático para não precisar `new Something();`
//usado apenas para retornar outra informação independente
//de qualquer outra informação da classe.
class Math {
  static soma(a, b) {
    return a + b;
  }
}



//---- Constantes e Variáveis de Escopo ----//
const a = ''; //Não pode ter o seu valor reatribuído;
const usuario = { nome = 'Gisele' } //Pode ser mutável;
usuário.nome = 'Gabriel';

function test() { //Chaves são aberturas de escopos;
  //Duas variáveis em escopos diferentes.
  let y = 2;
  if (x > 5) {
    let y = 4;
  }
}



//---- Operações em Vetores ----//
const arr = [1, 2, 4, 5, 8, 9];

//retorna um novo array;
const newArr = arr.map(function (item, index) {
  return item * 2 / index;
});

//transforma o array em um único valor, geralmente um número;
const sum = arr.reduce(function (total, next) {
  return total + next;
})

//remove os elementos do array que não satisfaz a condição;
const filter = arr.filter(function (item) {
  return item % 2 === 0; //deve retornar true or false
});

//verificar se existe alguma informação dentro do array 
//ou retorna o valor se encontrar a informação dentro do array;
const find = arr.find(function (item) {
  return item === 4;
});



//---- Arrow Functions ----//
const arr = [1, 2, 3, 4, 6];
const newArr = arr.map(item => item * 2);
//se apenas um parametro, não é necessário o ();
//se a função é usada apenas para o retorno de informação, não é necessário
//usar {} e return;

const teste = () => {
  return 'teste';
}
const teste = () => 'teste';

//quando objeto, é necessário os (), pois as {} também são utilizadas para indicar
//o corpo da função
const teste = () => ({ nome: 'Gisele' });



//---- Valores padrão ----//
function soma(a = 3, b = 6) {
  return a + b;
}
const soma = (a = 3, b = 6) => a + b;



//---- Desestruturação de Objetos ----//
const usuario = {
  nome: 'Gisele',
  idade: '26',
  endereco: {
    cidade: 'Florianópolis',
    estado: 'SC'
  }
}

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
//de 3 linhas para 1 linha:
const { nome, idade, endereco: { cidade } } = usuario;

const mostraNome = ({ nome, idade }) => (console.log(nome, idade));
mostraNome(usuario);



//---- REST Operator ----//
//pega o resto de alguma desestruturação ou de passagem de parâmetro

//usado em objetos
const usuario = {
  nome: 'Gisele',
  idade: 26,
  role: 'Developer'
}
const { nome, ...resto } = usuario;

//usado em vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

//usado em funções
function soma(a, b) {
  return a + b;
}
//opção para quando necessita adicionar mais parametros sem editar a função:
function soma(a, b, ...params = 0) {
  return a + b + params.reduce((total, next) => total + next);
}



//---- SPREAD Operator ----//
//repassa as informações de algum objeto ou de um array para outra estrutura de dados;
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

//cópia de informações de um objeto, alterando um atributo;
const usuario = {
  nome: 'Gisele',
  idade: 26,
  role: 'Developer'
}
const usuario2 = { ...usuario, nome: 'Gabriel' };



//---- Template Literals ----//
const nome = 'Gisele';
const idade = 26;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);



//---- Object Short Syntax ----//
const nome = 'Gisele';
const idade = 26;

const usuario = {
  //nome: nome,
  //idade: idade,
  nome,
  idade,
  role = 'Developer'
}
//quando a variável é de mesmo nome do atributo do objeto, não é necessário
//repetir o nome para o atributo;



//---- Import/Export ----//
/* Import */
import * as funcoes from './functions'; //importar todas as funções disponiveis no arquivo;
//import { soma as somaFunction } from './functions'; //para renomear é necessário `as`;
//import { soma } from '.functions';
//import soma from './functions'; //vindo de um export default;

console.log(funcoes.soma(1, 3));
console.log(funcoes.sub(5, 2));

/* Export */
//pode haver vários exports e exports defaults
export function soma(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mult(a, b) {
  return a * b;
}

/*
Usado quando o arquivo é especifico de uma função:
export default soma(a, b) {
 return a + b;
}
*/



//---- Async / Await ----//
//Promises: formas de realizar ações de forma assincrona;
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout('Ok', 2000);
});

// minhaPromise().then(response => {
//   console.log(response);
// });

/*A partir do ES8 é possível utilizar asyn/await*/
//ao usar async, a função vira uma promise
//não tem como usar await na frente de uma função se não estiver dentro de uma função async
async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

  /*
  minhaPromise().then(response => {
    console.log(response);
    
    minhaPromise().then(response) => {
      console.log(response);

      minhaPromise().then(response) => {
        console.log(response);
      }
    }
  });
  */
}
executaPromise();

// Async em arrow function
/*
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
*/

//Usando Axios
import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      //todas as funções do axios retornam promises;
      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}
Api.getUserInfo('gisabernardess');