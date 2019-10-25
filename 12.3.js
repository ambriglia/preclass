var some = function(arr, cb){
  for (var i = 0; i < arr.length; i++){
    var cbOutput = cb(arr[i]);
    if(cbOutput){
      return true;
    }
  }
  return false;
}

const nums = [1,2,3];
const otherNums = [1,5,3];
const equalTwo = function (num) {
  return num === 2;
}
const isEven = function(num) {
  return num % 2 === 0;
}

console.log(some(nums, equalTwo));
console.log(some(otherNums, equalTwo));
console.log(some(nums, isEven));
console.log(some(otherNums, isEven));
