export function Station(fName, sName, type, line_style, style, xPos, yPos, stationInstance, height){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = height;
    this.line_style = line_style;
    this.selected = false;
    this.connected = false;
    this.stationInstance = stationInstance;
};
export function Network(lines, width, height, filename){
    this.lines = lines;
    this.width = width;
    this.height = height;
    this.filename = filename;
}
export function Line(id, name, lineThicness, color, stations, linePath, xArray, yArray){
    this.id = id;
    this.name = name;
    this.lineThicness = lineThicness;
    this.color = color;
    this.stations = stations;
    this.selected = false;
    this.stationInstances = 0;
    this.linePath = linePath;
    this.xArray = xArray;
    this.yArray = yArray;
    this.dasharray = 0
};
let line_instances = 0;
export function drawStation(fName,sName, style, type, posX, posY, lineColor, instances, line_instance) {
    let svgns = "http://www.w3.org/2000/svg";
    switch(type){
        case 'destination':
            if(style == 'rect' && type != 'exchange'){
                let rect = document.createElementNS( svgns, style);
                rect.setAttributeNS( null,'id',instances);
                rect.setAttributeNS( null,'class','stations');
                rect.setAttributeNS( null,'x',posX-15);
                rect.setAttributeNS( null,'y',posY-15);
                rect.setAttributeNS( null,'width', '30');
                rect.setAttributeNS( null,'height','30');
                rect.setAttributeNS( null,'fill', '#FFFFFF');
                rect.setAttributeNS( null,'stroke-width', '3');
                rect.setAttributeNS( null,'stroke', '#000000');
                rect.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( rect );

                let first_name = document.createElementNS(svgns, 'text');
                let second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '18');
                first_name.setAttributeNS(null, 'font-weight', '700');
                first_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                second_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                let circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);   
                circle.setAttributeNS( null,'class','stations');
                circle.setAttributeNS( null,'cx',posX);
                circle.setAttributeNS( null,'cy', posY);
                circle.setAttributeNS( null,'r', '15.5');
                circle.setAttributeNS( null,'fill','#FFFFFF');
                circle.setAttributeNS( null,'stroke-width', '3');
                circle.setAttributeNS( null,'stroke', '#000000');
                circle.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( circle );
                
                let first_name = document.createElementNS(svgns, 'text');
                let second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '18');
                first_name.setAttributeNS(null, 'font-weight', '700');
                first_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                second_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }
            break;
        case 'exchange':
            break;
        case 'common':
            if(style == 'rect' && type != 'exchange'){
                let rect = document.createElementNS( svgns, style);
                rect.setAttributeNS( null,'id',instances);
                rect.setAttributeNS( null,'class','stations');
                rect.setAttributeNS( null,'x',posX-10);
                rect.setAttributeNS( null,'y',posY-10);
                rect.setAttributeNS( null,'rx', '5');
                rect.setAttributeNS( null,'ry','5');
                rect.setAttributeNS( null,'width', '20');
                rect.setAttributeNS( null,'height','20');
                rect.setAttributeNS( null,'fill',lineColor);
                rect.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( rect );

                let first_name = document.createElementNS(svgns, 'text');
                let second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-weight', '700');
                first_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-20);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                second_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                let circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);
                circle.setAttributeNS( null,'class','stations');
                circle.setAttributeNS( null,'cx',posX);
                circle.setAttributeNS( null,'cy', posY);
                circle.setAttributeNS( null,'r', '10');
                circle.setAttributeNS( null,'fill',lineColor);
                circle.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( circle );

                let first_name = document.createElementNS(svgns, 'text');
                let second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-weight', '700');
                first_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-20);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                second_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }
            break;
    }
    instances++;

  };
  export function drawExchange(exchangeArray){
    let svgns = "http://www.w3.org/2000/svg";
    let posX = exchangeArray[0].xPos;
    let posY = exchangeArray[0].yPos;
    let inter = document.createElementNS( svgns, 'rect');
    inter.setAttributeNS( null,'x',posX-10);
    inter.setAttributeNS( null,'y',posY-10-10*(exchangeArray.length-1));
    inter.setAttributeNS( null,'width', '20');
    inter.setAttributeNS( null,'height', 20*exchangeArray.length);
    inter.setAttributeNS( null,'rx', '10');        
    inter.setAttributeNS( null,'ry','10');
    inter.setAttributeNS( null,'fill','#FFFFFF');        
    inter.setAttributeNS( null,'stroke-width', '3');       
    inter.setAttributeNS( null,'stroke', '#000000');       
    document.getElementById( 'svg-canvas' ).appendChild( inter );
    let first_name = document.createElementNS(svgns, 'text');
    let second_name = document.createElementNS(svgns, 'text');
    first_name.innerHTML = exchangeArray[0].fName;
    first_name.setAttributeNS(null, 'x', posX);
    first_name.setAttributeNS(null, 'y', posY-27-(10*exchangeArray.length));
    first_name.setAttributeNS(null, 'id', exchangeArray[0].stationInstance);
    first_name.setAttributeNS(null, 'class', 'stationNames');
    first_name.setAttributeNS(null, 'font-size', '16');
    exchangeArray[0].height = 20*exchangeArray.length;
    first_name.setAttributeNS(null, 'font-weight', '700');
    first_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
    document.getElementById( 'svg-canvas' ).appendChild( first_name );
    second_name.innerHTML = exchangeArray[0].sName;
    second_name.setAttributeNS(null, 'x', posX);
    second_name.setAttributeNS(null, 'y', posY-17-(10*exchangeArray.length));
    second_name.setAttributeNS(null, 'class', 'stationNames');
    second_name.setAttributeNS(null, 'font-size', '12');
    second_name.setAttributeNS(null, 'font-weight', '700');
    second_name.setAttributeNS(null, 'style', "font-family: 'Noto Sans JP', sans-serif;text-anchor: middle;width: 100%;font-weight: 700;");
    document.getElementById( 'svg-canvas' ).appendChild( second_name );
    for(const exPoint of exchangeArray){
        exchangeArray[exchangeArray.indexOf(exPoint)].height = 20*exchangeArray.length;
        let exchangeDrawable = document.createElementNS( svgns, 'rect');
        exchangeDrawable.setAttributeNS( null,'id', exchangeArray[exchangeArray.indexOf(exPoint)].stationInstance);
        exchangeDrawable.setAttributeNS( null,'class','stations');
        exchangeDrawable.setAttributeNS( null,'x',posX-5);
        exchangeDrawable.setAttributeNS( null,'y',posY-(-25)-(10*(exchangeArray.length))+20*(exchangeArray.indexOf(exPoint)-1)); 
        exchangeDrawable.setAttributeNS( null,'width', '10');
        exchangeDrawable.setAttributeNS( null,'height','10');
        exchangeDrawable.setAttributeNS( null,'rx', '50');
        exchangeDrawable.setAttributeNS( null,'ry','50');
        exchangeDrawable.setAttributeNS( null,'fill', exPoint.color);
        exchangeDrawable.innerHTML = exPoint.id;
        document.getElementById( 'svg-canvas' ).appendChild( exchangeDrawable );
    }
  }
export function drawLine(color, thicness, beginX, beginY, endX, endY, style, line_instance, dasharray){
    let svgns = "http://www.w3.org/2000/svg";
    if(document.getElementById('line_' + line_instance) == null){
        var path = document.createElementNS(svgns, 'path');
        path.setAttributeNS(null, 'd', '');
    }
    else{
        var path = document.getElementById('line_' + line_instance);
    }
    let d = path.getAttributeNS(null, 'd');
    let x = 0;
    let y = 0;
    //math behind the connection at the butt section
    if(style == 'a'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY-beginY;
        x = endX-beginX;
        d += 'c' + x + ' 0,' + x + ' 0,' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'stroke-linecap', "square");
        path.setAttributeNS(null, 'stroke-linejoin', "butt");
        path.setAttributeNS(null, 'stroke-dasharray', dasharray+ ", " + dasharray);
        path.setAttributeNS(null, 'fill', '#ffffff00');     
        
    }else if(style == 'b'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY-beginY;
        x = endX-beginX;
        d += 'c0 ' + y + ', ' + '0.0 ' + y + ', ' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00');
    }else if(style == 'c'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY-beginY;
        x = endX-beginX;
        d += 'c' + x + ' ' + y/8 + ', ' + x/8 + ' ' + y + ', ' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00'); 
      }else if(style == 'd'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY-beginY;
        x = endX-beginX;
        d += 'c' + x/8 + ' ' + y + ', ' + x + ' ' + y/8 + ', ' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00'); 
      }else if(style == 'e'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = beginY;
        x = endX;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';
        y = endY;
        d += 'L' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00');
    }else if(style == 'f'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY;
        x = beginX;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';
        x = endX;
        d += 'L' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00');
    }else if(style == 'g'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        y = endY;
        x = endX;
        d += 'L' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', '#ffffff00');
    }
    document.getElementById( 'svg-canvas' ).appendChild( path );
};

export function drawStationsList(network, instancesLine){
    const st_list = document.getElementById('content');
    st_list.innerHTML = "";
    for(let i = 0; i < network.lines.length; i++){
        let lineElement = document.createElement('div');
        let lineText = document.createElement('a');
        lineText.innerHTML = network.lines[i].name;
        lineText.setAttributeNS(null, 'class', 'line_name');
        lineElement.style.borderColor = network.lines[i].color;
        lineElement.setAttributeNS(null, 'id', i);
        lineText.setAttributeNS(null, 'id', i);
        lineText.style.color = network.lines[i].color;
        lineText.style.borderColor = network.lines[i].color;
        lineElement.setAttributeNS(null, 'class', 'line_section');
        lineText.style.webkitTextStroke = "black";
        lineElement.appendChild(lineText);
        // lineElement.appendChild(stationsText);
        st_list.appendChild(lineElement);
        for(let j = 0; j < network.lines[i].stations.length; j++){
            let stationButton = document.createElement('a');
            stationButton.innerText = network.lines[i].stations[j].fName;
            stationButton.setAttributeNS(null, 'id', j);
            stationButton.setAttributeNS(null, 'class', 'station_instance');
            stationButton.style.color = network.lines[i].color;
            stationButton.style.borderColor = network.lines[i].color;
            stationButton.style.borderRadius = "0.3em";
            stationButton.style.padding = "0.2em";
            stationButton.setAttributeNS(null, 'onclick', "showOptions('st-editor'); hideOptions('st-list')");
            lineElement.appendChild(stationButton);
        }
    }
}
export function drawLinesList(network, instancesLine){
    const ln_list = document.getElementById('ln-content');
    ln_list.innerHTML = "";
    for(let i = 0; i < network.lines.length; i++){
        let lineText = document.createElement('a');
        lineText.innerHTML = network.lines[i].name;
        lineText.setAttributeNS(null, 'class', 'line_button');
        lineText.setAttributeNS(null, 'id', i);
        lineText.setAttributeNS(null, 'onclick', "showOptions('ln-editor'); hideOptions('ln-list');");
        lineText.style.color = network.lines[i].color;
        lineText.style.borderColor = network.lines[i].color;
        lineText.style.borderRadius = "0.2em";
        lineText.style.minWidth = "10%";
        lineText.style.transform = "scale(0.8)";
        lineText.style.textTransform = "uppercase";
        ln_list.appendChild(lineText);
    }
}
