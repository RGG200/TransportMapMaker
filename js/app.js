export let instancesLine = 0; // counts the line instances ( gonna remove that soon I think )
import { Station, Network, Line, drawLine, drawStation, drawStationsList, setStationText} from './drawItems.js';

  let net = new Network([]); //initial network

  let mosX; // mouse position on the canvas
  let mosY;
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
  let linePathId = 2;
  let is_any_station_selected = false;
  let selected_station = undefined;
canvas.addEventListener('mouseenter', updateDisplay, false);
canvas.addEventListener("mousemove", updateDisplay, false);
canvas.addEventListener('click', function(){
  if(net.lines[instancesLine] == undefined){
    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 9)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a' , 'rect', mosX, mosY, 0)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a' , 'rect', mosX, mosY, 0)]); // make a new line and station
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0); // draw stations
    net.lines[instancesLine].stationInstances++; // add station instances
    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];
  }else if(net.lines[instancesLine].stationInstances == 0){
    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0); // draw stations
    net.lines[instancesLine].stationInstances++;
    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];
  }else if(net.lines[instancesLine].stationInstances == 1){
    net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    for(let i = 1; i <= net.lines[instancesLine].stationInstances; i++){
      drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].stations[i-1].xPos, net.lines[instancesLine].stations[i-1].yPos, net.lines[instancesLine].stations[i].xPos, net.lines[instancesLine].stations[i].yPos, net.lines[instancesLine].stations[i].line_style, instancesLine);
      if(net.lines[instancesLine].stations[i-1].connected == false && i > 1){
        net.lines[instancesLine].stations[i-1].connected = true;
      }
    }
    for(const element of net.lines[instancesLine].stations){
      if(element.connected == false){ 
        element.type = "destination";
      }else{
        element.type = "common"; 
      }
      drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[instancesLine].color, net.lines[instancesLine].stations.indexOf(element));
    }
    net.lines[instancesLine].linePath[1] = net.lines[instancesLine].stations[1];
    net.lines[instancesLine].stationInstances++;
  }else if(is_any_station_selected == true){
      net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances);
      net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances];
      linePathId++;
      net.lines[instancesLine].stationInstances++;
      updateCanvas();
      is_any_station_selected = false;
  }else{
    getStations();
  }
  drawStationsList(net, instancesLine);
}, true);

const st_list = document.getElementById('st-list');

st_list.addEventListener("mouseenter", function(){
  for (let button of buttonGroup) {
    button.addEventListener("click", buttonPressed, false);  
  }
});

let id_selected_station_on_editor = 0;

let buttonGroup = document.getElementsByClassName('station_instance');

let data = {
  fName: '',
  sName: '',
  coord: [0, 0],
  cx_type: '',
  style_type: ''
};
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
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = "";
  for(let i = 2; i < net.lines[instancesLine].linePath.length; i++){
    if(net.lines[instancesLine].linePath[i-2] !== net.lines[instancesLine].linePath[i]){
      drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].linePath[i-1].xPos, net.lines[instancesLine].linePath[i-1].yPos, net.lines[instancesLine].linePath[i].xPos, net.lines[instancesLine].linePath[i].yPos, net.lines[instancesLine].linePath[i].line_style, instancesLine);
      if(net.lines[instancesLine].linePath[i-1].connected == false && i > 1){
        net.lines[instancesLine].linePath[i-1].connected = true;
      }
    }
    drawLine(net.lines[instancesLine].color, net.lines[instancesLine].lineThicness, net.lines[instancesLine].linePath[1-1].xPos, net.lines[instancesLine].linePath[1-1].yPos, net.lines[instancesLine].linePath[1].xPos, net.lines[instancesLine].linePath[1].yPos, net.lines[instancesLine].linePath[1].line_style, instancesLine);
  }
  for(const element of net.lines[instancesLine].stations){
    if(element.connected == false){ 
      element.type = "destination";
    }else{
      element.type = "common"; 
    }
    drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[instancesLine].color, net.lines[instancesLine].stations.indexOf(element));
  }
}

save.addEventListener('click', function(){
  drawStationsList(net, instancesLine);
  net.lines[instancesLine].stations[id_selected_station_on_editor].fName = document.getElementById('first').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].sName = document.getElementById('second').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].xPos = document.getElementById('xPos').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].yPos = document.getElementById('yPos').value;
  net.lines[instancesLine].stations[id_selected_station_on_editor].style = document.getElementById('style-btn').innerHTML;
  net.lines[instancesLine].stations[id_selected_station_on_editor].line_style = document.getElementById('cx-btn').innerHTML;
  updateCanvas();
});
