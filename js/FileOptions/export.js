function exportSVG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wd,
        height: hg
    });
}
function exportPNG(name, wd, hg){
  document.getElementById('svg-canvas').style.background = '#ffffff00'; 
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var data = document.getElementById('svg-canvas').outerHTML.toString();

  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svg = new Blob([data], {type: 'image/svg+xml'});
  var url = DOMURL.createObjectURL(svg);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
    var png_img = canvas.toDataURL("image/png");
  }

  img.src = url;
  var a = document.createElement('a');
  a.href = url
  a.download = name;
  a.click();
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
