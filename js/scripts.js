//Business Logic

function translateCode(code) {
  numbers = []
  for(i = 0; i <= code; i++) {
    if(i === 1) {
      numbers.push('Beep')
    }
    if(i === 2) {
      numbers.push('Boop')
    }
    if(i === 3) {
      numbers.push('Won\'t you be my neighbor?')
    }
    numbers.push(i);
  }

  numbers.forEach(function(number) {
    
  });
  return numbers;
}

function compareDigits(number) {
  return String(number).split('').map(Number);
}

