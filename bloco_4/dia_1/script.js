/*questão1 */
let a = 10;
let b = 20;

let ab = a + b;
  console.log(ab);

let abSub = a - b;
  console.log(abSub);

let abMult = a * b;
  console.log(abMult);

let abDiv = a / b;
  console.log(abDiv);

let abMod = a % b;
  console.log(abMod);

  /*questão 2 */
let maior = 40;
let menor = 30;

let compar = maior < menor; 
  console.log(compar);

/*questão 3 */
let num1 = 10;
let num2 = 20;
let num3 = 30;

let numM = num1;
  
if (num2 > num1 && num2 > num3) {
  console.log(numM = num2);
}

else if (num3 > num2 && num3 > num1) {
  console.log(numM = num3);
}

else {
  console.log("numero inexistente")
}

/*questão 4 */
let ex4 = -4;

if (ex4 >= 1) {
  console.log("positive");
}
else if (ex4 <= -1 ) {
  console.log("negative");
}

else {
  console.log("zero");
}

/*questão 5 */
let ang1 = 90;
let ang2 = 80;
let ang3 = 120;
let soma = ang1 + ang2 + ang3;
let res;

if (soma == 180) {
  res = true;
} else {
  res = false;
}
console.log(res)

/* questão 6 */
let pecaDoXadrez = "Rainha";

switch (pecaDoXadrez.toLowerCase()){
  case "peao":
  console.log("anda uma casa");
  break;
  case "cavalo":
  console.log("anda duas casas para frente e uma para o lado");
  break;

  case "bispo":
  console.log("anda nas diagonais");
  break;

  case "torre":
  console.log("anda horizontal e verticalmente");
  break;

  case "rainha":
  console.log("anda para todos os lados");
  break;

  default:
  console.log('essa peça não existe');
} 

// exercicio 7
let nota = 120;

if(nota >= 90 && nota <= 100) {
 console.log("nota A");

}else if(nota >= 80 && nota <= 90 ) {
  console.log("nota B");

}else if(nota >= 70 && nota <= 80) {
  console.log("nota C");

}else if(nota >= 60 && nota <= 70) {
  console.log("nota D");

}else if(nota >= 50 && nota <= 60) {
  console.log("nota E");

}else if(nota < 50 && nota > 1) {
  console.log("nota F");

}else{
  console.log("Erro")
}

// exercicio 8
let num_1 = 35;
let num_2 = 48;
let num_3 = 25;
let numT = false;

if((num_1 %2) == 0 || (num_2 %2) == 0 || (num_3 %2) == 0) { 
  numT =  true;
}

console.log(numT);

//exercicio 9

let num_1 = 32;
let num_2 = 48;
let num_3 = 25;
let numImpar = false;

if((num_1 %2) == 1 || (num_2 %2) == 1 || (num_3 %2) == 1) {
  numImpar = true;
}
console.log(numImpar);

// exercicio 10
let valorCusto = 20;
let valorVenda = 50;
if(valorCusto >= 0 && valorVenda >= 0) {
    let valorTotalCusto = valorCusto * 1.2;
    let lucro = (valorVenda - valorTotalCusto) * 1000;
    console.log('o lucro foi de '+ lucro);
} else {
    console.log('valores não podem ser iguais a zero');
}

//exercicio 11

let salarioBruto = 5000.00;
let valorInss;
let valorIr;
let salarioLiquido;

if(salarioBruto <= 1556.94) {
  valorInss = salarioBruto * 0.08;

}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  valorInss = salarioBruto * 0.09;

}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  valorInss = salarioBruto * 0.11;

}else if(salarioBruto >= 5189.82) {
  valorInss = 570.88;

}else {
  valorInss = 0;
}

let salDeduzidoInss = salarioBruto - valorInss;

if(salDeduzidoInss >= 1903.99 && salDeduzidoInss <= 2826.65){
  valorIr = (salDeduzidoInss * 0.075) - 142,80; 

}else if(salDeduzidoInss >= 2826.66 && salDeduzidoInss <= 3751){
  valorIr = (salDeduzidoInss * 0.15) - 354.80; 

}else if(salDeduzidoInss >= 3751.06 && salDeduzidoInss <= 4664.68){
  valorIr = (salDeduzidoInss * 0.225) - 636.13; 

}else if(salDeduzidoInss >= 4664.68){
  valorIr = (salDeduzidoInss * 0.275) - 869.36;

}else {
  valorIr = 0;
}

salarioLiquido = salDeduzidoInss - valorIr;
 console.log(salarioLiquido);
