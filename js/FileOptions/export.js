function exportSVG(name, w, h){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementbyId('svg-canvas'), name);
}
function exportPNG(name, w, h){
  document.getElementById('svg-canvas').style.background = '#ffffff';
  let ww = w*10;
  let hh = h*10;
  svgExport.downloadPng(document.getElementById('svg-canvas'), name, {width: ww, height: hh);
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
