//Business Logic

function translateCode(code) {  
    if(code === 1) {
      return 'Beep';
    }
    if(code === 2) {
      return 'Boop';
    }
    if(code === 3) {
      return 'Won\'t you be my neighbor?';
    }
    return code;
  }

function compareDigits(number) {
  const numbers = String(number).split('').map(Number);
  let numLookUp = String(number).match(/[1-3]/g);
  if (numLookUp) {
    return numLookUp.sort().map(Number)[numLookUp.length-1];
  }
  return number;
}

function generateDialog(number) {
  let timeOut = false;
  setTimeout( function() {
    timeOut = true;
  }, 5000);

  let dialog = [];
  for(i = 0; i <= number ; i++){
    if (i >= 200 ) {
      dialog.push(' *COUGH* *COUGH* *Static Noise* ');
      // return dialog.join(' ');
      return dialog;
    } 
    if(i > 9) {
      dialog.push(translateCode(compareDigits(i)));
    }
    else dialog.push(translateCode(i));
  }
  // return dialog.join(' ');
  return dialog;
}


//UI Logic

function displayDialog(event){
  event.preventDefault();
  let p = document.createElement("p");
  
  let responseDiv = document.getElementById("resBox");  
  let code = parseInt(document.getElementById("code").value);

  generateDialog(code).forEach(function (element) {
    let span = document.createElement("span");
    span.append(element);
    p.append(span);
  });
  //p.append(generateDialog(code));
  responseDiv.replaceChildren(p);
};

function hideForm(event) {
  event.preventDefault();
  const welcome = document.getElementById("welcome");
  const chatBox = document.getElementById("chatBox");
  welcome.style.display = "none";
  chatBox.style.display = "flex";
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  const nameBtn = document.getElementById("nameBtn");
  nameBtn.addEventListener("click", hideForm);
  form.addEventListener("submit", displayDialog);
});