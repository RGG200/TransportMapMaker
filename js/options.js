import { instancesLine } from "./app";
import { Network, net} from "./drawItems";
function showOptions(classname){
    document.getElementById(classname).style.display = 'block';
}
function hideOptions(classname){
    document.getElementById(classname).style.display = 'none';
}
function showEditor(hidden, showed){
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(showed).style.display = 'block';
}

function stationsList(network){
    var st_list = document.getElementById('st-list');
    var stationButton = document.createElement('button');
    for(station of network.lines[instancesLine].stations){
        stationButton.innerText = station.fName;
        stationButton.setAttributeNS(null, 'id', network.lines[instancesLine].stations.indexOf(station));
        stationButton.setAttributeNS(null, 'class', 'station_instance');
    }
    st_list.appendChild(stationButton);
}