function exportSVG(){
    document.getElementById('svg-canvas').style.background = 'none';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
    return true;
}
function resetSVG(){
    document.getElementById('svg-canvas').style.background = 'url("../img/grid.svg")';
}