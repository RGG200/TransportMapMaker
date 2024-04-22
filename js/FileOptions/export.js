function exportSVG(name, width, height){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: document.getElementById('svg-canvas').getAttribute('width'),
        height: document.getElementById('svg-canvas').getAttribute('height')
    });
}
function exportPNG(name, width, height){
  document.getElementById('svg-canvas').style.background = '#ffffff';
      svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        width: document.getElementById('svg-canvas').getAttribute('width'),
        height: document.getElementById('svg-canvas').getAttribute('height')
    });
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
