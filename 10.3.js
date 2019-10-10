function isValidPass (password){
  var hasLower = false;
  var hasUpper = false;

  if (password.length < 8){
    return false;
  }

  for (var i = 0; i < password.length; i++){
    if (password[i].toLowerCase() === password[i]){
      hasLower = true;
    }
    if (password[i].toUpperCase() === password[i]){
      hasUpper = true;
    }
  }

  return hasLower && hasUpper;
}

function isValidPassRegEx(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(password);
}

console.log(isValidPass('RexTheDog'));
console.log(isValidPass('rexthedog'));
console.log(isValidPass('REXTHEDOG'));
console.log(isValidPass('dog'));

console.log('************************');

console.log(isValidPassRegEx('RexTheDog'));
console.log(isValidPassRegEx('rexthedog'));
console.log(isValidPassRegEx('REXTHEDOG'));
console.log(isValidPassRegEx('dog'));