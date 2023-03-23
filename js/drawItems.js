export function Station(fName, sName, type, line_style, style, xPos, yPos, stationInstance){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
    this.line_style = line_style;
    this.selected = false;
    this.connected = false;
    this.stationInstance = stationInstance;
};
export function Network(lines){
    this.lines = lines;
}
export function Line(id, name, lineThicness, color, stations, linePath){
    this.id = id;
    this.name = name;
    this.lineThicness = lineThicness;
    this.color = color;
    this.stations = stations;
    this.selected = false;
    this.stationInstances = 0;
    this.linePath = linePath;
};
let line_instances = 0;
export function drawStation(fName,sName, style, type, posX, posY, lineColor, instances, line_instance) {
    var svgns = "http://www.w3.org/2000/svg";
    switch(type){
        case 'destination':
            if(style == 'rect' && type != 'exchange'){
                var rect = document.createElementNS( svgns, style);
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

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '18');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                var circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);   
                circle.setAttributeNS( null,'class','stations');
                circle.setAttributeNS( null,'cx',posX);
                circle.setAttributeNS( null,'cy', posY);
                circle.setAttributeNS( null,'r', '17.5');
                circle.setAttributeNS( null,'fill','#FFFFFF');
                circle.setAttributeNS( null,'stroke-width', '3');
                circle.setAttributeNS( null,'stroke', '#000000');
                circle.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( circle );
                
                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '18');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX-rect.getAttributeNS(null ,'width')*1.35);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }
            break;
        case 'exchange':
            var inter = document.createElementNS( svgns, 'rect');
            inter.setAttributeNS( null,'id',instances);
            inter.setAttributeNS( null,'class','stations');
            inter.setAttributeNS( null,'x',posX);
            inter.setAttributeNS( null,'y',posY+15);
            inter.setAttributeNS( null,'width', '40');
            inter.setAttributeNS( null,'height','80');
            inter.setAttributeNS( null,'rx', '20');
            inter.setAttributeNS( null,'ry','20');
            inter.setAttributeNS( null,'fill','#FFFFFF');
            inter.setAttributeNS( null,'stroke-width', '3');
            inter.setAttributeNS( null,'stroke', '#000000');
            inter.innerHTML = line_instance;
            document.getElementById( 'svg-canvas' ).appendChild( inter );

            var first_name = document.createElementNS(svgns, 'text');
            var second_name = document.createElementNS(svgns, 'text');
            first_name.innerHTML = fName;
            first_name.setAttributeNS(null, 'x', posX);
            first_name.setAttributeNS(null, 'y', posY-35);
            first_name.setAttributeNS(null, 'id', instances);
            first_name.setAttributeNS(null, 'class', 'stationNames');
            first_name.setAttributeNS(null, 'font-size', '16');
            
            first_name.setAttributeNS(null, 'font-weight', '700');
            document.getElementById( 'svg-canvas' ).appendChild( first_name );
            second_name.innerHTML = sName;
            second_name.setAttributeNS(null, 'x', posX);
            second_name.setAttributeNS(null, 'y', posY-25);
            second_name.setAttributeNS(null, 'class', 'stationNames');
            second_name.setAttributeNS(null, 'font-size', '12');
            second_name.setAttributeNS(null, 'font-weight', '700');
            document.getElementById( 'svg-canvas' ).appendChild( second_name );
            break;
        case 'common':
            if(style == 'rect' && type != 'exchange'){
                var rect = document.createElementNS( svgns, style);
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

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                var circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);
                circle.setAttributeNS( null,'class','stations');
                circle.setAttributeNS( null,'cx',posX);
                circle.setAttributeNS( null,'cy', posY);
                circle.setAttributeNS( null,'r', '10');
                circle.setAttributeNS( null,'fill',lineColor);
                circle.innerHTML = line_instance;
                document.getElementById( 'svg-canvas' ).appendChild( circle );

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-35);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( first_name );
                second_name.innerHTML = sName;
                second_name.setAttributeNS(null, 'x', posX);
                second_name.setAttributeNS(null, 'y', posY-25);
                second_name.setAttributeNS(null, 'class', 'stationNames');
                second_name.setAttributeNS(null, 'font-size', '12');
                second_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'svg-canvas' ).appendChild( second_name );
            }
            break;
    }
    instances++;

  };
export function drawLine(color, thicness, beginX, beginY, endX, endY, style, line_instance){
    var svgns = "http://www.w3.org/2000/svg";
    if(document.getElementById('line_' + line_instance) == null){
        var path = document.createElementNS(svgns, 'path');
        path.setAttributeNS(null, 'd', '');
    }
    else{
        var path = document.getElementById('line_' + line_instance);
    }
    var d = path.getAttributeNS(null, 'd');
    let x = 0;
    let y = 0;
    //math behind the connection a the butt section
    if(style == 'a'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        if(endX > beginX){
            x = endX-23.5;
        }else if(endX < beginX){
            x = endX-(-23.5);
        }else if(endX == beginX){
            x = endX;
        }
        if(endY < beginY){
            y = beginY;
        }else if(endY > beginY){
            y = beginY;
        }else{
            y = endY;
        }
        d += 'L' + x + ' ' + y + ' ';
        if(endX > beginX){
            x = endX-25;
        }else if(endX < beginX){
            x = endX-(-25);
        }else if(endX == beginX){
            x = endX;
        }
        d += 'M' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = beginY-(-26.5);
        }else if(endY < beginY){
            y = beginY-26.5;
        }else if(endY == beginY){
            y = beginY;
        }
        x = endX;

        d += 'L' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = beginY-(-25);
        }else if(endY < beginY){
            y = beginY-25;
        }else if(endY == beginY){
            y = beginY;
        }
        d += 'M' + x + ' ' + y + ' ';
        
        y = endY;
        d += 'L' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', color);
        
        
    }else if(style == 'b'){
        d += 'M' + beginX + ' ' + beginY + ' ';
        if(endX < beginX){
            x = beginX;
        }else if(endX > beginX){
            x = beginX;
        }else{
            x = endX;
        }
        if(endY == beginY){
            y = endY;
        }else if(endY > beginY){
            y = endY-23.5;
        }else if(endY < beginY){
            y = endY-(-23.5);
        }

        d += 'L' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = endY-25;
        }else if(endY < beginY){
            y = endY-(-25);
        }else if(endY == beginY){
            y = endY;
        }
        d += 'M' + x + ' ' + y + ' ';

        y = endY;

        if(endX > beginX){
            x = beginX-(-26.5);
        }else if(endX < beginX){
            x = beginX-26.5;
        }else if(endX == beginX){
            x = endX;
        }
        
        d += 'L' + x + ' ' + y + ' ';
        if(endX > beginX){
            x = beginX-(-25);
        }else if(endX < beginX){
            x = beginX-25;
        }else if(endX == beginX){
            x = endX;
        }
        d += 'M' + x + ' ' + y + ' ';
        
        x = endX;
        d += 'L' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', color);
        
    }
    document.getElementById( 'svg-canvas' ).appendChild( path );
};

export function drawStationsList(network, instancesLine){
    var st_list = document.getElementById('content');
    st_list.innerHTML = "";
    for(let i = 0; i < network.lines.length; i++){
        let lineElement = document.createElement('div');
        let lineText = document.createElement('a');
        lineText.innerHTML = "ligne_" + i;
        lineText.setAttributeNS(null, 'class', 'line_name');
        lineElement.setAttributeNS(null, 'id', i);
        lineText.setAttributeNS(null, 'id', i);
        lineElement.setAttributeNS(null, 'class', 'line_section');
        lineElement.appendChild(lineText);
        st_list.appendChild(lineElement);
        for(let j = 0; j < network.lines[i].stations.length; j++){
            let stationButton = document.createElement('a');
            stationButton.innerText = network.lines[i].stations[j].fName;
            stationButton.setAttributeNS(null, 'id', j);
            stationButton.setAttributeNS(null, 'class', 'station_instance');
            stationButton.setAttributeNS(null, 'onclick', "showEditor('options', 'st-editor');");
            lineElement.appendChild(stationButton);
        }
    }
}
export function drawLinesList(network, instancesLine){
    var ln_list = document.getElementById('ln_content');
    ln_list.innerHTML = "";
    for(let i = 0; i < network.lines.length; i++){
        let lineText = document.createElement('a');
        lineText.innerHTML = "ligne_" + i;
        lineText.setAttributeNS(null, 'class', 'line_button');
        lineText.setAttributeNS(null, 'id', i);
        lineText.setAttributeNS(null, 'onclick', "showEditor('options', 'ln-editor');");
        ln_list.appendChild(lineText);
    }
}
