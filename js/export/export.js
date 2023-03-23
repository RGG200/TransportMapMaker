function exportSVG(){
    document.getElementById('svg-canvas').style.background = 'none';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000, scale: 0.5});
    return true;
}
function exportPNG(){
    document.getElementById('svg-canvas').style.background = 'none';
    svgExport.downloadPng(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
    return true;
}
function exportJPG(){
    document.getElementById('svg-canvas').style.background = 'none';
    svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
    return true;
}
function resetSVG(){
    document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}
