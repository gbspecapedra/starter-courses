//importe apenas a classe Usuario renomeando-a para ClasseUsuario e chame a funão info();

/*
import ClasseUsuario from './functions';
ClasseUsuario.info();
*/

//importe a variável de idade e exiba a mesma em tela
/*
import { idade } from './functions';
console.log(idade);
*/

//importe tanto a classe quanto a variável idade e renomeie a variável idade para IdadeUsuario.
import Usuario, { idade as IdadeUsuario } from './functions'
Usuario.info();
console.log(IdadeUsuario);