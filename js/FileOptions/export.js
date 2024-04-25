function exportSVG(name, w, h){
  document.getElementById('svg-canvas').style.background = '#ffffff';
  svgExport.downloadSvg(document.getElementbyId('svg-canvas'), name, {width: w, height: h});
}
function exportPNG(name, w, h){
  document.getElementById('svg-canvas').style.background = '#ffffff00';
  svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {width: w, height: h,});
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
