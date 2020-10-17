//---- Exercicio 1
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin || false;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true



//---- Exercicio 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/* utilizando map */
const idades = usuarios.map(item => item.idade);
console.log(idades); // [23, 15, 30]

/* utilizando filter */
const rocketseat = usuarios.filter(item => item.idade >= 18 && item.empresa === 'Rocketseat');
console.log(rocketseat); // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

/* utilizando find */
const google = usuarios.find(item => item.empresa === 'Google');
console.log(google); // undefined

/* unindo operações */
const user = usuarios
  .map(item => ({ ...item, idade: (item.idade * 2) }))
  .filter(user => user.idade <= 50);
console.log(user);
/*
[
  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/



//---- Exercicio 3
/* Converta as funções dos seguintes trechos de código em Arrow Functions: */

const arr = [1, 2, 3, 4, 5];
/* arr.map(function(item) {
 return item + 10;
}); */
arr.map(item => item + 10);


const usuario1 = { nome: 'Diego', idade: 23 };
/* function mostraIdade(usuario1) {
 return usuario1.idade;
} */
const mostraIdade = () => usuario1.idade;
mostraIdade(usuario1);


const usuario2 = "Diego";
const idade = 23;
/* function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
} */
const mostraUsuario = (usuario2 = 'Diego', idade = 18) => { usuario2, idade };
mostraUsuario(usuario2, idade);
mostraUsuario(usuario2);


/* 
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 });
} */
const promise = () => new Promise((resolve, reject) => resolve());



//---- Exercicio 4
/* Desestruturação simples */
const empresa = {
  empresa_nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
}

const { empresa_nome, endereco: { cidade, estado } } = empresa;
console.log(empresa_nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


/* Desestruturação em parâmetros */
/*function mostraInfo(usuario3) {
  return `${usuario3.nome} tem ${usuario3.idade} anos.`;
}*/
//Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
//separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`;
const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos.`;
mostraInfo({ nome: 'Diego', idade: 23 });



//---- Exercicio 5
/* REST */

//defina uma variável x que recebe a primeira posição do vetor 
//e outra variável y que recebe todo restante dos dados.
const array = [1, 2, 3, 4, 5, 6];
const [x, ...y] = array;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
function soma(...params) {
  return params.reduce((a, b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

/* SPREAD */

//Crie uma variável usuario5 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario6 que contenha todos os dados do usuário porém com cidade Lontras.
const usuario4 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
const usuario5 = { ...usuario4, nome: 'Gabriel' };
const usuario6 = { ...usuario4, endereco: { ...usuario.endereco, cidade: 'Lontras' } }



//---- Exercicio 6
//Converta o seguinte trecho de código utilizando Template Literals:
const usuario7 = 'Diego';
const idade7 = 23;
//console.log('O usuário ' + usuario7 + ' possui ' + idade7 + ' anos');
console.log(`O usuário ${usuario7} possui ${idade7} anos`);



//---- Exercicio 7
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome8 = 'Diego';
const idade8 = 23;
const usuario8 = {
  //nome: nome,
  //idade: idade,
  nome8,
  idade8,
  cidade: 'Rio do Sul',
};