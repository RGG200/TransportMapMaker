function exportSVG(name, width, height){
    document.getElementById('svg-canvas').style.background = 'white';
    svgExport.downloadSvg(document.getElementById('svg-canvas'), name, {
        width: width,
        height: height
    });
    return true;
}
function exportPNG(name, width, height){
  document.getElementById('svg-canvas').style.background = '#ffffff';
  var file = new Blob([canvas.toDataURL('image/png')], {type: 'image/png'})
  const href = URL.createObjectURL(file);
  const a = Object.assign(document.createElement('a'),
    {
        href,
        style: "display:none",
    });
  a.download = name + ".png";
  document.body.appendChild(a);
  a.click();
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
