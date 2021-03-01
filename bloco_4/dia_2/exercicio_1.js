//exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}

//exercicio 2
let sum = 0;

for (let sumIndex = 0; sumIndex < numbers.length; sumIndex += 1){
  sum +=  numbers[sumIndex];
}
console.log(sum);

//exercicio 3

let average = sum / numbers.length

console.log(average);

//exercício 4
if (average > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}

//exercicio 5
let larger = 0; 

for (indexLarger< 0;indexLarger < numbers.length; indexLarger += 1) {
  if(numbers[indexLarger] > larger);{
  console.log(larger);
  }
}



