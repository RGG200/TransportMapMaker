export function exportSVG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wd,
        height: hg
    });
}
export function exportPNG(name, wd, hg){
    document.getElementById('svg-canvas').style.background = '#ffffff00';
    alert(wd)
    svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        width: wd,
        height: hg,
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
