let instancesLine = 0; // selected line

import { exportRTM } from './FileOptions/export-rtm.js';

import { Station, Network, Line, drawLine, drawStation, drawStationsList, drawLinesList, drawExchange} from './drawItems.js';





export let net = new Network([], 8000, 8000, "transportmap"); //initial network



let mosX; // mouse position on the canvas

let mosY;

let linePathId = 1;

let is_any_station_selected = false;

let selected_station = undefined;

let station_is_being_created = false;

const ln_save = document.getElementById('ln_save');

const ln_delete = document.getElementById('ln_delete');

const param_save = document.getElementById("param-save");

const deleter = document.getElementById('delete');

const st_list = document.getElementById('st-list');

const ln_list = document.getElementById('ln-list');

const export_rtm = document.getElementById("export-rtm");

const import_rtm = document.getElementById("import");

const connexion_types = document.getElementById("connexion-types");

const style_types = document.getElementById("style-types");

let id_selected_station_on_editor = 0;

let id_selected_line_on_editor = 0;

const dasharray = document.getElementsByClassName('dasharrayslider')[0]

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

let param_data ={

  filename: '',  width: 0, height: 0

}



export function updateDisplay(event) {

  mosX = Math.round((event.pageX-10)/20)*20; // make it so that the stuff goes in a grid

  mosY = Math.round((event.pageY-10)/20)*20;

};

  let previous_instancesLine = 1;

  let default_fNames = ['fontenay', 'VINCENNES', 'nation', 'auber', 'gare de lyon', 'cergy', 'gare du nord', 'sartrouville', 'poissy']; // default first station names

  let default_sNames = ['sous-bois', 'le-haut', 'centre', 'porte', 'le-pecq', 'préfécture']; // défault complementary names

  let colors = ['#CCCCFF', '#FF0000', "#0000FF", '#9900CC', '#FFAA00', '#0F0F00', '#AAAA00', '#00FF00', '#CCCC00', '#000000', "#B47F6A", "#AB4A3A"]; // Line colors

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

                this.setAttributeNS(null, 'stroke', '#FF0000');

                this.setAttributeNS(null, 'stroke-width', '3');

                if(instancesLine != previous_instancesLine){

                  linePathId = net.lines[instancesLine].linePath.length;

                }if(net.lines[instancesLine].linePath[linePathId-1] != net.lines[instancesLine].stations[selected_station]){

                  net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[selected_station];

                  linePathId = net.lines[instancesLine].linePath.length;

                }

                is_any_station_selected = true;

                break;

              case true:

                this.setAttributeNS(null, 'stroke', '#FF0000');

                this.setAttributeNS(null, 'stroke-width', '3');

                break;

            }

          }, true);

          break;

        case true:

          is_any_station_selected = false;

          break;

      }

    }

  }



  function isConnected(stationID, lineID) {

    for(let i = 0; i < stationID; i++){

      if(i != stationID){

        if(net.lines[lineID].linePath[stationID].xPos == net.lines[lineID].linePath[i].xPos && net.lines[lineID].linePath[stationID].yPos == net.lines[lineID].linePath[i].yPos){

          return false;

        }

      }

    }

    return true;

  }

  function isUniqueInLine(lineID) {

    for(const element of net.lines[lineID].stations){

      if(element != undefined){

        if(mosX >= element.xPos-10 && mosY >= element.yPos-element.height/2 && mosX <= element.xPos+10 && mosY <= element.yPos+element.height/2){

        return false;

        }
      }

    }
    return true;

  }

  function isDrawableUnique(stationID, lineID) {

    for(const line of net.lines){

      for(const station of line.stations){

        if(station.xPos-10 <= net.lines[lineID].stations[stationID].xPos && station.yPos-station.height/2 >= net.lines[lineID].stations[stationID].yPos && station.xPos+10 >= net.lines[lineID].stations[stationID].xPos && station.yPos+station.height/2 <= net.lines[lineID].stations[stationID].yPos && net.lines.indexOf(line) != lineID){

          net.lines[lineID].stations[stationID].xPos = station.xPos;

          net.lines[lineID].stations[stationID].yPos = station.yPos;

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

  if(net.lines[instancesLine] == undefined ){

    net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 11)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a' , 'rect', mosX, mosY, 0, 0)], [new Station(default_fNames[getRandomIntInclusive(0, 8)], '', 'destination', 'a' , 'rect', mosX, mosY, 0, 0)], [] , []); // make a new line and station

    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0, instancesLine); // draw stations

    net.lines[instancesLine].stationInstances= 1; // add station instances

    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];

    updateCanvas();

  }

  else if(net.lines[instancesLine].stationInstances == 0){

    net.lines[instancesLine].stations[0] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a' , 'rect', mosX, mosY, 0, 0); // make a new line and station

    drawStation(net.lines[instancesLine].stations[0].fName, net.lines[instancesLine].stations[0].sName, net.lines[instancesLine].stations[0].style, net.lines[instancesLine].stations[0].type, mosX, mosY, net.lines[instancesLine].color, 0, instancesLine); // draw stations

    net.lines[instancesLine].stationInstances= 1; // add station instances

    net.lines[instancesLine].linePath[0] = net.lines[instancesLine].stations[0];

  }

  switch(is_any_station_selected){
    case true:
      if(isUniqueInLine(instancesLine)){
        net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances] = new Station(default_fNames[getRandomIntInclusive(0, 8)], default_sNames[getRandomIntInclusive(0, 5)], 'destination', 'a', 'rect', mosX, mosY, net.lines[instancesLine].stationInstances, 0);
        net.lines[instancesLine].linePath[linePathId] = net.lines[instancesLine].stations[net.lines[instancesLine].stationInstances];
        if(linePathId != net.lines[instancesLine].linePath.length){linePathId = net.lines[instancesLine].linePath.length;}
        net.lines[instancesLine].stationInstances = net.lines[instancesLine].stations.length;
        updateCanvas();
        station_is_being_created = true;
        is_any_station_selected = false;
      }else{
        updateCanvas();
        is_any_station_selected = false;
      }
      break;
    case false:
      getStations();
      station_is_being_created = false
      break;
  }
  if(net.lines[instancesLine].stationInstances > 0){
    drawStationsList(net, instancesLine);
  }
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
}

const save = document.getElementById('save');
function updateCanvas(){
  const canvas = document.getElementById('svg-canvas');
  canvas.innerHTML = "";
  let xValues = [0, 0];
  let yValues = [0, 0];
  for(let j = 0; j < net.lines.length; j++){
    for(let i = 1; i < net.lines[j].linePath.length; i++){
      if(isConnected(i, j)){
        if(net.lines[j].stations[net.lines[j].linePath[i].stationInstance] != undefined){
          drawLine(net.lines[j].color, net.lines[j].lineThicness, net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].xPos, net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].yPos, net.lines[j].stations[net.lines[j].linePath[i].stationInstance].xPos, net.lines[j].stations[net.lines[j].linePath[i].stationInstance].yPos, net.lines[j].stations[net.lines[j].linePath[i].stationInstance].line_style, j, net.lines[j].dasharray);
        }

        if(net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].connected == false && i > 1 || i > 1 && net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].xPos != xValues[0] || i > 1 && net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].yPos != yValues[0] || i > 1 && net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].xPos != xValues[1] || i > 1 && net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].yPos != yValues[1]){
          net.lines[j].stations[net.lines[j].linePath[i-1].stationInstance].connected = true;
        }
      }
    }
  } 
  let exArray = [];
  let coArray = [];
  let line_instances = [];
  let exID = 0;
  for(let j = 0; j < net.lines.length; j++){
    for(const element of net.lines[j].stations){
      if(!isDrawableUnique(net.lines[j].stations.indexOf(element), j)){ 
        element.type = "exchange";
        exArray[exID] = element;
        coArray[exID] = net.lines[j].color;
        exArray[exID].line_parent = net.lines[j];
        line_instances[exID] = j;
        exID++;
        is_any_station_selected = false
      }else if(element.connected == false){
        element.type = "destination";
        drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[j].color, net.lines[j].stations.indexOf(element), j);
      }else{
        element.type = "common";
        drawStation(element.fName, element.sName, element.style, element.type, element.xPos, element.yPos, net.lines[j].color, net.lines[j].stations.indexOf(element), j);
      }
    }
  }
  for(let k = 0; k < exArray.length; k++ ){
    let exArray_station = exArray.filter(exStation => exStation.xPos == exArray[k].xPos && exStation.yPos == exArray[k].yPos);
    let coArray_station = [];
    for(let l = 0; l < exArray_station.length; l++){
      coArray_station = coArray.filter(color => color == exArray_station[l].line_parent.color);  
    }
    drawExchange(exArray_station, coArray_station);
  }
}

save.addEventListener('click', function(){
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].fName = document.getElementById('first').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].sName = document.getElementById('second').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].xPos = document.getElementById('xPos').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].yPos = document.getElementById('yPos').value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].style = style_types.value;
  net.lines[id_selected_line_on_editor].stations[id_selected_station_on_editor].line_style = connexion_types.value;
  station_is_being_created = false
  drawStationsList(net, instancesLine);
  updateCanvas();
});



ln_create.addEventListener("click", function(){
  if(net.lines[instancesLine].stationInstances > 0 || net.lines[instancesLine] == undefined){
    if(net.lines[0] != null){
      instancesLine = net.lines.length;
      net.lines[instancesLine] = new Line(instancesLine, 'ligne_' + instancesLine, "5", colors[getRandomIntInclusive(0, 11)], [], [], [], []);
      drawLinesList(net, instancesLine);
      linePathId = 1;
    }
  }
});

ln_save.addEventListener('click', function(){
  net.lines[id_selected_line_on_editor].name = document.getElementById('name').value;
  net.lines[id_selected_line_on_editor].color = document.getElementById('color').value;
  net.lines[id_selected_line_on_editor].lineThicness = document.getElementById('thicness').value;
  net.lines[id_selected_line_on_editor].dasharray = dasharray.value
  station_is_being_created = false
  drawLinesList(net, instancesLine);  drawStationsList(net, instancesLine);
  updateCanvas();
});

document.getElementById("param-btn").addEventListener("click", function(){
  param_data.filename = net.filename;
  param_data.width = net.width;
  param_data.height = net.height;
  document.getElementById("filename").value = param_data.filename;
  document.getElementById("width").value = param_data.width;
  document.getElementById("height").value = param_data.height;
  document.getElementById("svg-exbtn").setAttributeNS(null, "onclick", `exportSVG("${param_data.filename}", ${net.width}, ${net.height})`);
  document.getElementById("png-exbtn").setAttributeNS(null, "onclick", `exportPNG("${net.filename}", ${net.width}, ${net.height})`);
  document.getElementById("export-rtm").setAttributeNS(null, "onclick", `exportRTM(${net}, ${net.filename});`);
});

document.getElementById("svg-exbtn").addEventListener("click", function(){
  this.setAttributeNS(null, "onclick", `exportSVG("${net.filename}", ${net.width}, ${net.height});`);
  document.getElementById("png-exbtn").setAttributeNS(null, "onclick", `exportPNG("${net.filename}", ${net.width}, ${net.height});`);
  document.getElementById("export-rtm").setAttributeNS(null, "onclick", `exportRTM(${net}, "ooo");`);
});

document.getElementById("png-exbtn").addEventListener("click", function(){
  document.getElementById('svg-exbtn').setAttributeNS(null, "onclick", `exportSVG("${net.filename}", ${net.width}, ${net.height});`);
  this.setAttributeNS(null, "onclick", `exportPNG("${net.filename}", ${net.width}, ${net.height});`);
  document.getElementById("export-rtm").setAttributeNS(null, "onclick", `exportRTM(${net}, "ooo");`);
});

param_save.addEventListener("click", function(){
  net.filename = document.getElementById("filename").value;
  net.width = document.getElementById("width").value;
  net.height = document.getElementById("height").value;
  document.getElementById("svg-canvas").setAttributeNS(null, "width", net.width);
  document.getElementById("svg-canvas").setAttributeNS(null, "height", net.height);
  document.getElementById('svg-exbtn').setAttributeNS(null, "onclick", `exportSVG("${net.filename}", ${net.width}, ${net.height});`);
  document.getElementById("png-exbtn").setAttributeNS(null, "onclick", `exportPNG("${net.filename}", ${net.width}, ${net.height});`);
  document.getElementById("export-rtm").setAttributeNS(null, "onclick", `exportRTM(${net}, "ooo");`);
});



deleter.addEventListener('click', function(){

  console.log(net)

  var new_linePath = net.lines[id_selected_line_on_editor].linePath.filter(station => station.stationInstance != id_selected_station_on_editor);

  net.lines[id_selected_line_on_editor].linePath = new_linePath;

  console.log(new_linePath);

  console.log(net.lines[id_selected_line_on_editor]);

  net.lines[id_selected_line_on_editor].stations.splice(id_selected_station_on_editor, 1);

  net.lines[id_selected_line_on_editor].stationInstances = net.lines[id_selected_line_on_editor].stations.length;

  linePathId = net.lines[id_selected_line_on_editor].linePath.length;

  net.lines[id_selected_line_on_editor].stations.forEach(station => {

    station.stationInstance = net.lines[id_selected_line_on_editor].stations.indexOf(station);

    net.lines[id_selected_line_on_editor].linePath.forEach(element => {

      element.connected = false;

      let new_station_instance = element.stationInstance;

      if(element.stationInstance > id_selected_station_on_editor){

        element.stationInstance = new_station_instance

      }

    });

  });

  console.log(net.lines[id_selected_line_on_editor].linePath);

  if(net.lines[id_selected_line_on_editor].stationInstances <= 0){

    net.lines.splice(id_selected_line_on_editor);

  }

  drawStationsList(net, instancesLine);

  updateCanvas();

  station_is_being_created = false

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

    station_is_being_created = false

}, true);



export_rtm.addEventListener("click", function(){

  exportRTM(net, "ooo");

});

const onChange = e => { 

    var file = e.target.files[0];

    var reader = new FileReader();

    reader.onload = onReaderLoad;

    reader.readAsText(file);

    function onReaderLoad(e){

      var obj = JSON.parse(e.target.result);

      if(obj != undefined){

        net.lines = obj.lines;

        net.width = obj.width;

        net.filename = obj.filename;

        net.height = obj.height;

        for(var i = 0; i < net.lines.length; i++){

          net.lines[i].stations[i].stationInstance-=1

        }

        document.getElementById("svg-canvas").setAttributeNS(null, "width", net.width);

        document.getElementById("svg-canvas").setAttributeNS(null, "height", net.height);

        param_data.filename = net.filename;

        param_data.width = net.width;

        param_data.height = net.height;            

        is_any_station_selected = false;

        selected_station = undefined;

        station_is_being_created = false;

        instancesLine = 0;

        linePathId = net.lines[instancesLine].linePath.length;

        updateCanvas();

        drawStationsList(net, instancesLine);

        drawLinesList(net, instancesLine);

        document.getElementById('svg-exbtn').setAttributeNS(null, "onclick", `exportSVG("${net.filename}", ${net.width}, ${net.height});`);

        document.getElementById("png-exbtn").setAttributeNS(null, "onclick", `exportPNG("${net.filename}", ${net.width}, ${net.height});`);

        document.getElementById("export-rtm").setAttributeNS(null, "onclick", `exportRTM(${net}, "ooo");`);

        e.target.files[0] = null

      }

      console.log(net);

    }

}

import_rtm.addEventListener("change", onChange);
