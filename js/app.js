export let instancesLine = 0; // counts the line instances ( gonna remove that soon I think )
import { Station, Network, Line, drawLine, drawStation, drawStationsList, drawLinesList} from './drawItems.js';

let net = new Network([]); //initial network

let mosX; // mouse position on the canvas
let mosY;
let linePathId = 2;
let is_any_station_selected = false;
let selected_station = undefined;
const ln_save = document.getElementById('ln_save');
const st_list = document.getElementById('st-list');
const ln_list = document.getElementById('ln-list');
let id_selected_station_on_editor = 0;
let id_selected_line_on_editor = 0;

let ln_create = document.getElementById("ln_create");
let buttonGroup = document.getElementsByClassName('station_instance');
let ln_buttonGroup = document.getElementsByClassName('line_button');
let ln_buttonGroup_2 = document.getElementsByClassName('line_name');

let data = {
  fName: '',
  sName: '',
  coord: [0, 0],
  cx_type: '',
  style_type: ''
};
let ln_data = {
  name: '',
  color: '',
  thicness: 0
};

export function updateDisplay(event) {
  mosX = Math.round((event.pageX-10)/20)*20; // make it so that the stuff goes in a grid
  mosY = Math.round((event.pageY-10)/20)*20;
};
  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy', 'gare du nord', 'sartrouville', 'poissy']; // default first station names
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']; // défault complementary names
  let colors = ['aqua', 'red', "blue", 'purple', 'orangered', 'red', 'yellow', 'green', 'crimson', 'black']; // Line colors
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  function getStations(){
    let lineStations = document.getElementsByClassName('stations');
    for(let stationd of lineStations){
        stationd.addEventListener("click", function(){
          this.setAttributeNS(null, 'stroke', '#00FF00');
          this.setAttributeNS(null, 'stroke-width', '5');
          selected_station = stationd.id;
          net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[selected_station];
          linePathId++;
          is_any_station_selected = true;   
        }, true);
      }
  }

  function isConnected(stationID, lineID) {
    for(let i = 0; i < stationID; i++){
      if(net.lines[lineID].linePath[stationID].stationInstance == net.lines[lineID].linePath[i].stationInstance){
        return false;
      }
    }
    return true;
  }

const canvas = document.getElementById('svg-canvas');
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  if(net.lines[instancesLine] == undefined){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 9)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a' , 'rect', mosX, mosY, 0)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a' , 'rect', mosX, mosY, 0)]); // make a new line and station
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0); // draw stations
    net.lines[instancesLine].stationInstances++; // add station instances
    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];
    updateCanvas();
  }else if(net.lines[instancesLine].stationInstances == 0){
    net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0); // draw stations
    net.lines[instancesLine].stationInstances++;
    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];
    updateCanvas();
  }else if(net.lines[instancesLine].stationInstances == 1){
    net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
    net.lines[instancesLine].linePath[1] = net.lines[instancesLine].stations[1];
    net.lines[instancesLine].stationInstances++;  
    updateCanvas();
  }else if(is_any_station_selected == true){
      net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
      net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances];
      linePathId = net.lines[instancesLine].linePath.length;
      alert(linePathId);
      net.lines[instancesLine].stationInstances++;
      updateCanvas();
      is_any_station_selected = false;
  }else{
    getStations();
  }
  drawStationsList(net, instancesLine);
  drawLinesList(net, instancesLine);
}, true);



st_list.addEventListener("mouseenter", function(){
  for (let button of buttonGroup) {
    button.addEventListener("click", buttonPressed, true);  
  }
});
ln_list.addEventListener("mouseenter", function(){
  for (let button of ln_buttonGroup) {
    button.addEventListener("click", ln_buttonPressed, true);  
  }
  for(let ln_name of ln_buttonGroup_2){
    button.addEventListener("click", ln_buttonPressed_2, true);
    linePathId = net.lines[instancesLine].linePath.length;
  }
});

const ln_buttonPressed = e => {
  id_selected_line_on_editor = e.target.id; // Get ID of Clicked Element
  ln_data.name = net.lines[id_selected_line_on_editor].name;
  ln_data.color = net.lines[id_selected_line_on_editor].color;
  ln_data.thicness = net.lines[id_selected_line_on_editor].lineThicness;
  document.getElementById('name').value = ln_data.name;
  document.getElementById('color').value = ln_data.color;
  document.getElementById('thicness').value = ln_data.thicness;
  
}
const ln_buttonPressed_2 = e => {
  instancesLine = e.target.id; // Get ID of Clicked Element
}
const buttonPressed = e => {
  id_selected_station_on_editor = e.target.id; // Get ID of Clicked Element
  data.fName = net.lines[instancesLine].stations[id_selected_station_on_editor].fName;
  data.sName = net.lines[instancesLine].stations[id_selected_station_on_editor].sName;
  data.coords = [net.lines[instancesLine].stations[id_selected_station_on_editor].xPos, net.lines[instancesLine].stations[id_selected_station_on_editor].yPos];
  data.cx_type = net.lines[instancesLine].stations[id_selected_station_on_editor].line_style;
  data.style_type = net.lines[instancesLine].stations[id_selected_station_on_editor].style;
  document.getElementById('first').value = data.fName;
  document.getElementById('second').value = data.sName;
  document.getElementById('xPos').value = data.coords[0];
  document.getElementById('yPos').value = data.coords[1];
  document.getElementById('cx-btn').innerHTML = data.cx_type;
  document.getElementById('style-btn').innerHTML = data.style_type;
  
}
const save = document.getElementById('save');

function updateCanvas(){
  const canvas = document.getElementById('svg-canvas');
  canvas.innerHTML = "";
  for(let j = 0; j < net.lines.length; j++){
    if(net.lines[j].linePath.length > 1){
      for(let i = 1; i < net.lines[j].linePath.length; i++){
        if(isConnected(i, j)){
          drawLine(net.lines[j].color, net.lines[j].lineThicness, net.lines[j].linePath[i-1].xPos, net.lines[j].linePath[i-1].yPos, net.lines[j].linePath[i].xPos, net.lines[j].linePath[i].yPos, net.lines[j].linePath[i].line_style, j);
          if(net.lines[j].linePath[i-1].connected == false && i > 1){
            net.lines[j].linePath[i-1].connected = true;
          }
        }
      }
    }
    for(const element of net.lines[j].stations){
      if(element.connected == false){ 
        element.type = "destination";
      }else{
        element.type = "common"; 
      }
      drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[j].color, net.lines[j].stations.indexOf(element));
    }
  }
}

save.addEventListener('click', function(){
  net.lines[instancesLine].stations[id_selected_station_on_editor].fName = document.getElementById('first').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].sName = document.getElementById('second').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].xPos = document.getElementById('xPos').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].yPos = document.getElementById('yPos').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].style = document.getElementById('style-btn').innerHTML;
  net.lines[instancesLine].stations[id_selected_station_on_editor].line_style = document.getElementById('cx-btn').innerHTML;
  drawStationsList(net, instancesLine);
  updateCanvas();
});

ln_create.addEventListener("click", function(){
  if(net.lines[instancesLine].stationInstances > 0){
    if(net.lines[0] != null){
      instancesLine++;
      net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 9)], [], []);
      drawLinesList(net, instancesLine);
      linePathId = 0;
    }
  }
});

ln_save.addEventListener('click', function(){
  net.lines[id_selected_line_on_editor].name = document.getElementById('name').value;
  net.lines[id_selected_line_on_editor].color = document.getElementById('color').value;
  net.lines[id_selected_line_on_editor].lineThicness = document.getElementById('thicness').value;
  drawLinesList(net, instancesLine);
  updateCanvas();
});
