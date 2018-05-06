const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

let index = 0;

document.body.addEventListener('keydown',function(e){
  var key = parseInt(e.detail || e.which);
  
  if (key === code[index]){
    index++;
  }else{
    index = 0;
  }
  
  if (index === code.length){
    alert("Wake me up... I can't wake up!");
    index = 0;
  }
});
  
}