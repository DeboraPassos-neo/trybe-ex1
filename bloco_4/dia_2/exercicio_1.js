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


