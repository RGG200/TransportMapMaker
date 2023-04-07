 export function exportRTM(network, filename){
    if(network != null){

        var file = new Blob([JSON.stringify(network, null, 2)], {type: 'application/plain'});
        const href = URL.createObjectURL(file);
        const a = Object.assign(document.createElement('a'),
        {
            href,
            style: "display:none",
        });
        a.download = filename + ".rtm";
        document.body.appendChild(a);
        a.click();
    }else{alert("la carte est vide");}
}
