function downloadSVGasTextFile() {
  const base64doc = btoa(unescape(encodeURIComponent(document.querySelector('svg').outerHTML)));
  const a = document.createElement('a');
  const e = new MouseEvent('click');

  a.download = 'download.svg';
  a.href = 'data:text/html;base64,' + base64doc;
  a.dispatchEvent(e);
}

