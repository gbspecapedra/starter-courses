"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//---- Exercicio 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin || false;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//---- Exercicio 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
/* utilizando map */

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades); // [23, 15, 30]

/* utilizando filter */

var rocketseat = usuarios.filter(function (item) {
  if (item.idade > 18 && item.empresa === 'Rocketseat') {
    return item;
  }
});
console.log(rocketseat); // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

/* utilizando find */

var google = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(google); // undefined

/* unindo operações */

var user = usuarios.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade * 2
  });
}).filter(function (user) {
  return user.idade <= 50;
});
console.log(user);
/*
[
  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/
//---- Exercicio 3

/* Converta as funções dos seguintes trechos de código em Arrow Functions: */

var arr = [1, 2, 3, 4, 5];
/* arr.map(function(item) {
 return item + 10;
}); */

arr.map(function (item) {
  return item + 10;
});
var usuario1 = {
  nome: 'Diego',
  idade: 23
};
/* function mostraIdade(usuario1) {
 return usuario1.idade;
} */

var mostraIdade = function mostraIdade() {
  return usuario1.idade;
};

mostraIdade(usuario1);
var usuario2 = "Diego";
var idade = 23;
/* function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
} */

var mostraUsuario = function mostraUsuario() {
  var usuario2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  usuario2, idade;
};

mostraUsuario(usuario2, idade);
mostraUsuario(usuario2);
/* 
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 });
} */

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //---- Exercicio 4

/* Desestruturação simples */


var empresa = {
  empresa_nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var empresa_nome = empresa.empresa_nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(empresa_nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

/* Desestruturação em parâmetros */

/*function mostraInfo(usuario3) {
  return `${usuario3.nome} tem ${usuario3.idade} anos.`;
}*/
//Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
//separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`;

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

mostraInfo({
  nome: 'Diego',
  idade: 23
}); //---- Exercicio 5

/* REST */
//defina uma variável x que recebe a primeira posição do vetor 
//e outra variável y que recebe todo restante dos dados.

var array = [1, 2, 3, 4, 5, 6];
var x = array[0],
    rest = array.slice(1); //Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

/* SPREAD */
//Crie uma variável usuario5 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario6 que contenha todos os dados do usuário porém com cidade Lontras.

var usuario4 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario5 = _objectSpread({}, usuario4, {
  nome: 'Gabriel'
});

var usuario6 = _objectSpread({}, usuario4, {
  endereco: {
    cidade: 'Lontras'
  }
}); //---- Exercicio 6
//Converta o seguinte trecho de código utilizando Template Literals:


var usuario7 = 'Diego';
var idade7 = 23; //console.log('O usuário ' + usuario7 + ' possui ' + idade7 + ' anos');

console.log("O usu\xE1rio ".concat(usuario7, " possui ").concat(idade7, " anos")); //---- Exercicio 7
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

var nome8 = 'Diego';
var idade8 = 23;
var usuario8 = {
  //nome: nome,
  //idade: idade,
  nome8: nome8,
  idade8: idade8,
  cidade: 'Rio do Sul'
};
