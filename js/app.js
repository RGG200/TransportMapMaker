let instancesStation = 0;
let instancesLine = 0;
import { Station, Network, Line, drawLine, drawStation} from './config.js';

  let net = new Network([]);

  let mosX;
  let mosY;
  export function updateDisplay(event) {
    mosX = Math.round((event.pageX-10)/25)*25;
    mosY = Math.round((event.pageY-10)/25)*25;
  };
  let default_fNames = ['fontenay', 'vincennes', 'nation', 'auber', 'gare de lyon', 'cergy']
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
    if(net.lines[instancesLine] == undefined){
        net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, 2, '#FF0000', [])
        net.lines[instancesLine].stations[instancesStation] = new Station('ff','ss', 'destination', 'rect', mosX, mosY);
        drawStation(net.lines[instancesLine].stations[instancesStation].style, mosX, mosY);
        instancesStation++;
    }else{
        net.lines[instancesLine].stations[instancesStation] = new Station('ff','ss', 'destination', 'rect', mosX, mosY);
        for(let i = 0; i <= instancesStation; i++){
            drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[instancesStation-1].xPos, net.lines[instancesLine].stations[instancesStation-1].yPos, net.lines[instancesLine].stations[instancesStation].xPos, net.lines[instancesLine].stations[instancesStation].yPos);
            drawStation(net.lines[instancesLine].stations[i].style, mosX, mosY);
        }
        instancesStation++;
    }
}, false);