let instancesStation = 0;
let instancesLine = 0;
import * as config from './config.js';

  let net = new config.network([]);

  let default_fNames = ['fontenay', 'vincennes', 'nation', 'auber', 'gare de lyon', 'cergy']
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']
canvas.addEventListener('mouseenter', config.updateDisplay, false);
canvas.addEventListener("mousemove", config.updateDisplay, false);
canvas.addEventListener('click', function(){
    if(net.lines[instancesLine] == undefined){
        net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, 2, '#FF0000', [])
        net.lines[instancesLine].stations[instancesStation] = new Station('ff','ss', 'destination', 'rect', mosX, mosY);
        config.drawStation(net.lines[instancesLine].stations[instancesStation].style, mosX, mosY);
        instancesStation++;
    }else{
        net.lines[instancesLine].stations[instancesStation] = new Station('ff','ss', 'destination', 'rect', mosX, mosY);
        for(let i = 0; i <= instancesStation; i++){
            config.drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[instancesStation-1].xPos, net.lines[instancesLine].stations[instancesStation-1].yPos, net.lines[instancesLine].stations[instancesStation].xPos, net.lines[instancesLine].stations[instancesStation].yPos);
            config.drawStation(net.lines[instancesLine].stations[i].style, mosX, mosY);
        }
        instancesStation++;
    }
}, false);