export function exportRTM(network){
    var file = new Blob([JSON.stringify(network, null, 2)], {data: 'application/json'});
    const href = URL.createObjectURL(file);
    const a = Object.assign(document.createElement('a'),
    {
        href,
        style: "display:none",
    });
    a.download = "transportmap.rtm";
    document.body.appendChild(a);
    a.click();
}
