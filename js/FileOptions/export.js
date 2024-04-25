function exportSVG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wd,
        height: hg
    });
}
function exportPNG(name, wd, hg){
  document.getElementById('svg-canvas').style.background = '#ffffff';
      svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        useCSS: true,
    });
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
