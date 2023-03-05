let instancesLine = 0;
let stationInstances = 0;
import { Station, Network, Line, drawLine, drawStation} from './drawItems.js';
import { saveMap } from './export/export.js'

  let net = new Network([]);

  let mosX;
  let mosY;
  export function updateDisplay(event) {
    mosX = Math.round((event.pageX-15)/40)*40;
    mosY = Math.round((event.pageY-15)/40)*40;
  };
  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy'];
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture'];
  let colors = ['aqua', 'red', "blue", 'purple', 'orangered', 'red', 'yellow', 'green'];
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  if(stationInstances == 0 && net.lines[instancesLine] == undefined){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 7)], [new Station(prompt('entrer le nom de la station'), '', 'destination', prompt('indiquez le type connexion de la station: (a ou b):') , 'rect', mosX, mosY)]);
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color);
    net.lines[instancesLine].stationInstances++;
    stationInstances = net.lines[instancesLine].stationInstances;
  }else{
    net.lines[instancesLine].stations[stationInstances] = new Station(prompt('entrer le nom de la station'), '', 'common', prompt('indiquez le type connexion de la station: (a ou b):'), 'circle', mosX, mosY);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    for(let i = 1; i <= stationInstances; i++){
      drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[i-1].xPos, net.lines[instancesLine].stations[i-1].yPos, net.lines[instancesLine].stations[i].xPos, net.lines[instancesLine].stations[i].yPos, net.lines[instancesLine].stations[i].line_style);
    }
    for(const element of net.lines[instancesLine].stations){
      drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[instancesLine].color);
    }
    net.lines[instancesLine].stationInstances++;
    stationInstances = net.lines[instancesLine].stationInstances;
    }
    //as in st = station
  const st_list = document.getElementById('st-list');
  for(let i = 0; i < instancesLine; i++){
    for(let j = 0; j < stationInstances; j++){
      var station = document.createElement('button');
      station.setAttributeNS(null, 'class', 'title_station');
      station.setAttributeNS(null, 'id', j);
      station.setAttributeNS(null, 'onclick', 'showOptions("st-editor")');
      station.setAttributeNS(null, 'clicked', 'false');
      station.innerHTML = net.lines[j].stations[i].fName + ' ' + net.lines[j].stations[i].sName;
      st_list.appendChild(station);
    }
  }
}, false);
let selectedStation = 0;
for(let i = 0; i < stationInstances; i++){
  const stations = document.getElementsByClassName('title_station');
  stations[i].addEventListener('click', function(){
    stations[i].setAttributeNS(null, 'clicked', true);
  }, false);
  if(stations[i].getAttributeNS(null, 'clicked') == true){
    selectedStation = i;
  }
}


//csa = Connection style A
csb = document.getElementById('csb');
csa = document.getElementById('csa');
csa.addEventListener('click', function(){
  net.lines[instancesLine].stations[selectedStation].line_style = 'a';
}, false);
csb.addEventListener('click', function(){
  net.lines[instancesLine].stations[selectedStation].line_style = 'b';
}, false);