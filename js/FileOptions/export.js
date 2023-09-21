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
  const svgNode = document.querySelector('svg-canvas');
  const svgString = (new XMLSerializer()).serializeToString(svgNode);
  const svgBlob = new Blob([svgString], {
    type: 'image/svg+xml;charset=utf-8'
  });

  const DOMURL = window.URL || window.webkitURL || window;
  const url = DOMURL.createObjectURL(svgBlob);
  const image = new Image();
  image.width = svgNode.width.baseVal.value;
  image.height = svgNode.height.baseVal.value;
  image.src = url;
  image.onload = function () {
    const canvas = document.getElementById('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    DOMURL.revokeObjectURL(url);

    const imgURI = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    triggerDownload(imgURI);
  };
  var href = imgURI
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
