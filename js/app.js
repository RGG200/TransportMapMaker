export let instancesLine = 0;
export let stationInstances = 0;
import { Station, Network, Line, drawLine, drawStation, drawStationsList, clearStationText} from './drawItems.js';

  let net = new Network([]);

  let mosX;
  let mosY;
  export function updateDisplay(event) {
    mosX = Math.round((event.pageX-10)/20)*20;
    mosY = Math.round((event.pageY-10)/20)*20;
  };
  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy', 'gare du nord', 'sartrouville'];
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
  if(net.lines[instancesLine] == undefined){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 7)], [new Station(prompt('entrer le nom de la station'), '', 'destination', prompt('indiquez le type connexion de la station: (a ou b):') , 'rect', mosX, mosY)]);
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color);
    net.lines[instancesLine].stationInstances++;
  }else{
    let xArray = [];
    let yArray = [];
    let posI = 0;
    net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 7)], '', 'destination', 'a', 'rect', mosX, mosY);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    for(let i = 1; i <= net.lines[instancesLine].stationInstances; i++){
      xArray[posI] = net.lines[instancesLine].stations[posI].xPos;
      yArray[posI] = net.lines[instancesLine].stations[posI].yPos;
      posI++;
      drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[i-1].xPos, net.lines[instancesLine].stations[i-1].yPos, net.lines[instancesLine].stations[i].xPos, net.lines[instancesLine].stations[i].yPos, net.lines[instancesLine].stations[i].line_style, instancesLine);
      if(net.lines[instancesLine].stations[i-1].connected == false && i > 1){
        net.lines[instancesLine].stations[i-1].connected = true;
      }
    }
    xArray[posI] = net.lines[instancesLine].stations[posI].xPos;
    yArray[posI] = net.lines[instancesLine].stations[posI].yPos;
    posI++;
    for(const element of net.lines[instancesLine].stations){
      if(element.connected == false){ 
        element.type = "destination";
      }else{
        element.type = "common"; 
      }
      drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[instancesLine].color);
    }
    net.lines[instancesLine].stationInstances++;
    }
    drawStationsList(net, instancesLine);
}, false);

const st_list = document.getElementById('st-list');

st_list.addEventListener("mouseenter", function(){
  for (let button of buttonGroup) {
    button.addEventListener("click", buttonPressed, false);  
  }
});

let id_selected_station_on_editor = 0;

let buttonGroup = document.getElementsByClassName('station_instance');

var data = {
  fName: '',
  sName: '',
  coord: [0, 0],
  cx_type: '',
  style_type: ''
};
const buttonPressed = e => {
  id_selected_station_on_editor = e.target.id; // Get ID of Clicked Element
  data.fName= net.lines[instancesLine].stations[id_selected_station_on_editor].fName;
  data.sName= net.lines[instancesLine].stations[id_selected_station_on_editor].sName;
  data.coords= [net.lines[instancesLine].stations[id_selected_station_on_editor].xPos, net.lines[instancesLine].stations[id_selected_station_on_editor].xPos];
  data.cx_type= net.lines[instancesLine].stations[id_selected_station_on_editor].line_style;
  data.style_type= net.lines[instancesLine].stations[id_selected_station_on_editor].style;
  document.getElementById('first').setAttributeNS(null, 'value', data.fName);
  document.getElementById('second').setAttributeNS(null, 'value', data.sName);
  document.getElementById('cx-btn').innerHTML = data.cx_type;
  document.getElementById('style-btn').innerHTML = data.style_type;
  
}
var save = document.getElementById('save');

save.addEventListener('click', function(){
  net.lines[instancesLine].stations[id_selected_station_on_editor].fName = document.getElementById('first').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].sName = document.getElementById('second').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].style = document.getElementById('style-btn').innerHTML;
  net.lines[instancesLine].stations[id_selected_station_on_editor].line_style = document.getElementById('cx-btn').innerHTML;
  const element = net.lines[instancesLine].stations[id_selected_station_on_editor];
  drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[instancesLine].color);
  clearStationText(element);
});
