 export function exportRTM(network, filename){
    if(network != null){
        var file = new Blob([JSON.stringify(network, null)], {type: 'application/rtm');
        const href = URL.createObjectURL(file);
        const a = Object.assign(document.createElement('a'),
        {
            href,
            style: "display:none",
        });
        a.download = network.filename + ".rtm";
        document.body.appendChild(a);
        a.click();
    }else{alert("la carte est vide");}
}
