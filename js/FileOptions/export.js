function exportSVG(name, width, height){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: width,
        height: height
    });
    return true;
}
function exportPNG(name, width, height){
  document.getElementById('svg-canvas').style.background = '#ffffff';
  svgExport.downloadPng(document.getElementById('svg-canvas'), `${name}`, { width: width, height: height, scale: 5});
  return true;
}
// function exportJPG(){
//     document.getElementById('svg-canvas').style.background = 'white';
//     svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
//     return true;
// }
function resetSVG(){
    document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
