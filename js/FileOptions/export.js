export function exportSVG(name, wd, hg){
    let wde = parseInt(wd)
    let hge = parseInt(hg)
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: wde,
        height: hge,
    });
}
export function exportPNG(name, wd, hg){
    let wde = parseInt(wd)*2
    let hge = parseInt(hg)*2
    svgExport.downloadPng(document.getElementById('svg-canvas').outerHTML.toString(), name, {
        width: wde,
        height: hge,
    });
}
function exportJPG(){
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
}

async function resetCanvas(){

    setTimeout(() => document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")', 1000);

}
