function exportSVG(filename, filewidth, fileheight){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), `${filename}`, {
        width: filewidth,
        height: fileheight,
    });
    return true;
}
function exportPNG(filename, filewidth, fileheight){
  document.getElementById('svg-canvas').style.background = 'white';
  const svg = document.getElementById('svg-canvas');
  const {x, y, width, height) = svg.viewBox.baseVal;
  const blob = new Blob([svg.outerHTML], {type: image/svg+xml'});
  const url = URL.createObjectURL(blob);
  const image = document.createElement('img');
  image.src = url;
  image.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d");
    context.drawImage(image, x, y, width, height);
    const link = document.getElementById("link");
    link.href = canvas.toDataURL();
    URL.revokeObjectURL(url);
  });
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
