let instancesLine = 0; // selected line
import { exportRTM } from './FileOptions/export-rtm.js';
import { Station, Network, Line, drawLine, drawStation, drawStationsList, drawLinesList} from './drawItems.js';


export let net = new Network([]); //initial network

let mosX; // mouse position on the canvas
let mosY;
let linePathId = 1;
let is_any_station_selected = false;
let selected_station = undefined;
let station_is_being_created = false;
const ln_save = document.getElementById('ln_save');
const ln_delete = document.getElementById('ln_delete');
const deleter = document.getElementById('delete');
const st_list = document.getElementById('st-list');
const ln_list = document.getElementById('ln-list');
const export_rtm = document.getElementById("export-rtm");
const import_rtm = document.getElementById("import");
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
  let previous_instancesLine = 1;
  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy', 'gare du nord', 'sartrouville', 'poissy']; // default first station names
  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']; // défault complementary names
  let colors = ['aqua', 'red', "blue", 'purple', 'orangered', 'red', 'yellow', 'green', 'crimson', 'black']; // Line colors
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  let lineStations = document.getElementsByClassName('stations');
  function getStations(){
    for(let stationd of lineStations){
      switch(is_any_station_selected){
        case false:
          stationd.addEventListener("click", function(){
            switch(station_is_being_created){
              case false:
                  previous_instancesLine = instancesLine;
                  instancesLine = stationd.innerHTML;
                  selected_station = stationd.id;
                  this.setAttributeNS(null, 'stroke', '#00FF00');
                  this.setAttributeNS(null, 'stroke-width', '5');
                  if(instancesLine != previous_instancesLine){
                    linePathId = net.lines[instancesLine].linePath.length;
                  }if(net.lines[instancesLine].linePath[linePathId-1] != net.lines[instancesLine].stations[selected_station]){
                    net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[selected_station];
                    linePathId = net.lines[instancesLine].linePath.length;
                  }
                  is_any_station_selected = true;
                break;
              case true:
                is_any_station_selected = false;
                station_is_being_created = false;
                break;
            }
          }, true);
          break;
        case true:
          break;
      }
    }
  }

  function isConnected(stationID, lineID) {
    for(let i = 0; i < stationID; i++){
      if(i != stationID){
        if(net.lines[lineID].linePath[stationID] == net.lines[lineID].linePath[i]){
          return false;
        }
      }
    }
    return true;
  }
  function isUniqueInLine(lineID) {
    for(const element of net.lines[lineID].stations){
      if(mosX == element.xPos && mosY == element.yPos){
        return false;
      }
    }
    return true;
  }
  function isDrawableUnique(stationID, lineID) {
    for(const line of net.lines){
      for(const station of line.stations){
        if(station.xPos == net.lines[lineID].stations[stationID].xPos && station.yPos == net.lines[lineID].stations[stationID].yPos && net.lines.indexOf(line) != lineID){
          return false;
        }
      }
    }
    return true;
  }

const canvas = document.getElementById('svg-canvas');
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  if(net.lines[instancesLine] == undefined || net.lines[instancesLine].stationInstances == 0){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 9)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a' , 'rect', mosX, mosY, 0)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a' , 'rect', mosX, mosY, 0)]); // make a new line and station
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0, instancesLine); // draw stations
    net.lines[instancesLine].stationInstances++; // add station instances
    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];
    updateCanvas();
  }
  switch(is_any_station_selected){
    case true:
      if(isUniqueInLine(instancesLine)){
        net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
        net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances];
        if(linePathId != net.lines[instancesLine].linePath.length){linePathId = net.lines[instancesLine].linePath.length;}
        net.lines[instancesLine].stationInstances++;
        updateCanvas();
        station_is_being_created = true;
      }else{
        updateCanvas();
      }
      is_any_station_selected = false;
      break;
    case false:
      getStations();
      break;
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
const buttonPressed = e => {
  id_selected_station_on_editor = e.target.id; // Get ID of Clicked Element
  id_selected_line_on_editor = e.target.parentNode.id;
  data.fName = net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].fName;
  data.sName = net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].sName;
  data.coords = [net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].xPos, net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].yPos];
  data.cx_type = net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].line_style;
  data.style_type = net.lines[e.target.parentNode.id].stations[id_selected_station_on_editor].style;
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
  let xArray = [];
  let yArray = [];
  let xValues = [0, 0];
  let yValues = [0, 0];
  for(let j = 0; j < net.lines.length; j++){
    net.lines[j].stations.forEach(station => {
      xArray[net.lines[j].stations.indexOf(station)] = station.xPos;
      yArray[net.lines[j].stations.indexOf(station)] = station.yPos;
      xValues[0] = Math.max(...xArray);
      yValues[0] = Math.max(...yArray);
      xValues[1] = Math.min(...xArray);
      yValues[1] = Math.min(...yArray);
    });
    if(net.lines[j].linePath.length > 1){
      console.log(net.lines[j].linePath);
      for(let i = 1; i < net.lines[j].linePath.length; i++){
        if(isConnected(i, j)){
          drawLine(net.lines[j].color, net.lines[j].lineThicness, net.lines[j].linePath[i-1].xPos, net.lines[j].linePath[i-1].yPos, net.lines[j].linePath[i].xPos, net.lines[j].linePath[i].yPos, net.lines[j].linePath[i].line_style, j);
          if(net.lines[j].linePath[i-1].connected == false && i > 1 || i > 1 && net.lines[j].linePath[i-1].xPos != xValues[0] || i > 1 && net.lines[j].linePath[i-1].yPos != yValues[0] || i > 1 && net.lines[j].linePath[i-1].xPos != xValues[1] || i > 1 && net.lines[j].linePath[i-1].yPos != yValues[1]){
            console.log(net.lines[j].linePath[i-1].xPos);
            net.lines[j].linePath[i-1].connected = true;
          }
        }
      }
    }
  } 
  for(let j = 0; j < net.lines.length; j++){
    for(const element of net.lines[j].stations){
      console.log(xValues + ' ' + yValues);
      if(!isDrawableUnique(net.lines[j].stations.indexOf(element), j)){ 
        console.log("yesssss");
        element.type = "exchange";
      }else if(element.connected == false){
        element.type = "destination";
      }else{
        element.type = "common";
      }
      drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[j].color, net.lines[j].stations.indexOf(element), j);
    }
  }
}

save.addEventListener('click', function(){
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].fName = document.getElementById('first').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].sName = document.getElementById('second').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].xPos = document.getElementById('xPos').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].yPos = document.getElementById('yPos').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].style = document.getElementById('style-btn').innerHTML;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].line_style = document.getElementById('cx-btn').innerHTML;
  drawStationsList(net, instancesLine);
  updateCanvas();
});

ln_create.addEventListener("click", function(){
  if(net.lines[instancesLine].stationInstances > 0){
    if(net.lines[0] != null){
      instancesLine = net.lines.length;
      net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 9)], [], []);
      drawLinesList(net, instancesLine);
      linePathId = 1;
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

deleter.addEventListener('click', function(){
  let new_linePath = net.lines[instancesLine].linePath.filter(station => station.stationInstance != id_selected_station_on_editor);
  net.lines[instancesLine].linePath = new_linePath;
  net.lines[instancesLine].stations.splice(id_selected_station_on_editor, 1);
  net.lines[instancesLine].stationInstances -= 1;
  linePathId = net.lines[instancesLine].linePath.length;
  net.lines[instancesLine].stations.forEach(station => {
    station.stationInstance = net.lines[instancesLine].stations.indexOf(station);
    net.lines[instancesLine].linePath.forEach(element => {
      element.connected = false;
      if(element.stationInstance >= id_selected_station_on_editor){
        element.stationInstance--;
      }
    });
  });
    console.log(net.lines[instancesLine].linePath);
  if(net.lines[instancesLine].stationInstances <= 0){
    net.lines.splice(instancesLine);
  }
  drawStationsList(net, instancesLine);
  updateCanvas();
}, true);
ln_delete.addEventListener("click", function(){
    net.lines.splice(id_selected_line_on_editor);
    for(let i = id_selected_line_on_editor; i < net.lines.length; i++){
     net.lines[i].id -= 1;  
    }
    instancesLine = 0;
    linePathId = 1;
    drawLinesList(net, instancesLine);
    updateCanvas();
}, true);

export_rtm.addEventListener("click", function(){
  exportRTM(net);
});
var input = document.getElementById('import');
const onChange = e => { 
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
    function onReaderLoad(e){
      var obj = JSON.parse(e.target.result);
      if(obj.lines != []){
        net.lines = obj.lines;
        instancesLine = 0;
        linePathId = net.lines[instancesLine].linePath.length;
        updateCanvas();
        drawStationsList();
        drawLinesList();
      }
      console.log(net);
    }
}
import_rtm.addEventListener("change", onChange);
