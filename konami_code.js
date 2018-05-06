const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const input = document.body.querySelector('input');

function init() {

let index = 0;

input.addEventListener('keydown',function(e){
  const key = parseInt(e.detail || e.which);
});
  if (key === code[index]){
    index++;
  }else{
    index = 0;
  }
  
  if (index === code.length){
    alert("Hurray!");
    index = 0;
  }
}