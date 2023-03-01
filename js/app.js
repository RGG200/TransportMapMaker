let instancesLine = 0;
import { Station, Network, Line, drawLine, drawStation} from './drawItems.js';

  let net = new Network([]);

  let mosX;
  let mosY;
  export function updateDisplay(event) {
    mosX = Math.round((event.pageX-10)/25)*25;
    mosY = Math.round((event.pageY-10)/25)*25;
  };
  let default_fNames = ['fontenay', 'vincennes', 'nation', 'auber', 'gare de lyon', 'cergy']
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  const context = canvas.getContext('2d');
    if(net.lines[instancesLine] == undefined){
      net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, 3, '#FF000F', [new Station(default_fNames[getRandomIntInclusive(0, 5)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'rect', mosX, mosY)])
      drawStation(net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].fName + '\n' + net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].sName, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].style, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].type, mosX, mosY, net.lines[instancesLine].color);
      net.lines[instancesLine].stationInstances++;
    }else{
      context.clearRect(0, 0, canvas.width, canvas.height);
      net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 5)], default_sNames[getRandomIntInclusive(0, 5)], 'common', 'circle', mosX, mosY);
      for(const station of net.lines[instancesLine].stations){
        drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances-1].xPos, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances-1].yPos, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].xPos, net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances].yPos);
        drawStation(station.fName + ' ' + station.sName, station.style, station.type, station.xPos, station.yPos, net.lines[instancesLine].color);
      }
      net.lines[instancesLine].stationInstances++;

  }
  
}, false);