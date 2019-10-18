const includes = (arr, elem) => {
  for (let i = 0; i < arr.length; i++){
    if(elem === arr[i]){
      return true;
    }
  }
  
  return false;
}

const numbers = [1, 2, 3];
const words = ['code', 'dev', 'nerd'];

console.log(includes(numbers, 1));
console.log(includes(numbers, 4));
console.log(includes(words, 'nerd'));
console.log(includes(words, 'genius'));
