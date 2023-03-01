let instancesLine = 0;
let stationInstances = 0;
import { Station, Network, Line, drawLine, drawStation} from './drawItems.js';

  let net = new Network([]);

  let mosX;
  let mosY;
  export function updateDisplay(event) {
    mosX = Math.round((event.pageX-15)/40)*40;
    mosY = Math.round((event.pageY-15)/40)*40;
  };
  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy']
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  if(stationInstances == 0 && net.lines[instancesLine] == undefined){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", prompt('entrer la couleur de la ligne'), [new Station(default_fNames[getRandomIntInclusive(0, 5)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'rect', mosX, mosY)]);
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color);
    stationInstances++;
  }else{
    net.lines[instancesLine].stations[stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 5)], default_sNames[getRandomIntInclusive(0, 5)], 'common', 'circle', mosX, mosY);
    drawStation(net.lines[instancesLine].stations[stationInstances].fName, net.lines[instancesLine].stations[stationInstances].sName, net.lines[instancesLine].stations[stationInstances].style, net.lines[instancesLine].stations[stationInstances].type, mosX, mosY, net.lines[instancesLine].color);
    drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[stationInstances-1].xPos, net.lines[instancesLine].stations[stationInstances-1].yPos, net.lines[instancesLine].stations[stationInstances].xPos, net.lines[instancesLine].stations[stationInstances].yPos); 
    stationInstances++;
    }
}, false);