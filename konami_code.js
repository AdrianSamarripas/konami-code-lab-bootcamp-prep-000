const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
const keyevent = document.querySelectorAll('input');
let index = 0;

keyevent.addEventListener('keydown',function(e){
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