export function exportSVG(name, wd, hg){
    let wde = parseInt(wd)
    let hge = parseInt(hg)
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wde,
        height: hge
    });
    resetSVG();
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
export function exportPNG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    let wde = parseInt(wd)*2
    let hge = parseInt(hg)*2
    svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        width: wde,
        height: hge,
    });
    document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}
