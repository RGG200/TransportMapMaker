export function exportSVG(name, wd, hg){
    let wde = parseInt(wd)
    let hge = parseInt(hg)
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wde,
        height: hge
    });
}
export function exportPNG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    let wde = parseInt(wd)
    let hge = parseInt(hg)
    svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        width: wde,
        height: hge,
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
