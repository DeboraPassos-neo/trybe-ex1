//exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}

//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let sumIndex = 0; sumIndex < numbers.length; sumIndex += 1){
  sum +=  numbers[sumIndex];
}
console.log(sum);

//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = sum / numbers.length

console.log(average);

//exercício 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
if (average > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}

//exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = 0; 


for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > larger) {
    larger = numbers[index];
  }
}
  console.log(larger);
//exercício 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    odd += 1;
  }
}
  if (odd === 0) {
  console.log('nenhum valor ímpar encontrado');
  } else {
  console.log(odd);
  }

//exercício 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lessNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] < lessNumber) {
    lessNumber = numbers[index];
  }
}
  console.log(lessNumber);

// exercício 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
   numbers.push(index);
}
console.log(numbers);

//exercicio 9
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i] / 2);
};
