function exportSVG(network){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), network.filename, {
        width: network.width,
        height: network.height,
    });
    return true;
}
function  exportPNG(network){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadPng(document.getElementById('svg-canvas'), "transport-map", { width: network.width, height: network.height});
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
