function double(arr){
  const doubles = [];

  for (var i = 0; i < arr.length; i++){
    const doubled = arr[i] * 2;
    doubles.push(doubled);
  }

  return doubles;
}

const doubleEach = (arr) => {
  const doubles = [];
  arr.forEach(elem => doubles.push(elem*2));
  return doubles;
}

const doubleMap = arr => arr.map(elem => elem*2);

const positive = [1,2,3];
const negative = [-1,-2,-3];

console.log(double(positive));
console.log(double(negative));

console.log('--------------------------')

console.log(doubleEach(positive));
console.log(doubleEach(negative));

console.log('--------------------------')

console.log(doubleMap(positive));
console.log(doubleMap(negative));