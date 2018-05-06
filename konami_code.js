const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
const keyevent = document.querySelector('input');
let index = 0;

keyevent.addEventListener('keydown',function onKeydown(e){
  const key = parseInt(e.detail || e.which);

  if (key === code[index])
  
  });
}