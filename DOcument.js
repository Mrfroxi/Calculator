
function insert(num){
document.querySelector('.intors').value += num;
}

function clean(){
    document.querySelector('.intors').value = "";
}



function equal() {
    let expresion = document.querySelector('.intors').value;
    console.log("Привет");
    if(expresion) {
      document.querySelector('.intors').value = eval(document.querySelector('.intors').value);
    }
  }