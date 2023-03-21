function exportSVG(){
  document.getElementById('svg-canvas').style.backgroundImage = '';
  svgExport.downloadSvg(getElementbyId('svg-canvas'), 'transport-map', {width: 2000, height: 2000);
}
