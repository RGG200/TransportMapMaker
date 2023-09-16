 export function exportRTM(network, filename){
    if(network != null){
        var seen = [];
        var file = new Blob([
            JSON.stringify(network, function(key, val) {
               if (val != null && typeof val == "object") {
                    if (seen.indexOf(val) >= 0) {
                        return;
                    }
                    seen.push(val);
                }
                return val;
            })], {type: 'application/rtm'});
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
