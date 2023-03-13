var exportbtn = document.getElementById('exportmap');
var canvas = document.getElementbyId('canvas');

exportbtn.addEventListener("click", function(){

  (event) => (event.target.href = canvas.toDataURL());

}, false);
