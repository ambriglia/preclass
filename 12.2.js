const map = function(arr, cb){
  const newArr = [];

  for (let i = 0; i < arr.length; i++){
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}

const nums = [1,2,3];
const add = function (num) {
  return num + 2;
}
function subtract(num) {
  return num - 2;
}
const multiply = (num) => {
  return num * 2;
}
const divide = num => num / 2;

console.log(map(nums, add));
console.log(map(nums, subtract));
console.log(map(nums, multiply));
console.log(map(nums, divide));
