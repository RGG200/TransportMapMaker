function exportSVG(name, width, height){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: width,
        height: height
    });
    resetSVG();
}
function downloadSVG(name) {
  const svg = document.getElementById('container').innerHTML;
  const blob = new Blob([svg.toString()]);
  const element = document.createElement("a");
  element.download = name;
  element.href = window.URL.createObjectURL(blob);
  element.click();
  element.remove();
  resetSVG();
}
function exportPNG(name, width, height){
  document.getElementById('svg-canvas').style.background = '#ffffff';
      svgExport.downloadPng(document.getElementById('svg-canvas'), name, {
        width: width,
        height: height
    });
  resetSVG();
}
function exportJPG(){
  document.getElementById('svg-canvas').style.background = 'white';
  svgExport.downloadJpeg(document.getElementById('svg-canvas'), 'transport-map', {width: 2000, height: 2000});
  resetSVG();
}
function resetSVG(){
  document.getElementById('svg-canvas').style.background = 'transparent';
}
