export function Station(fName, sName, type, line_style, style, xPos, yPos){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
    this.line_style = line_style;
    this.selected = false;
    this.connected = false;
};
export function Network(lines){
    this.lines = lines;
}
export function Line(id, name, lineThicness, color, stations){
    this.id = id;
    this.name = name;
    this.lineThicness = lineThicness;
    this.color = color;
    this.stations = stations;
    this.selected = false;
    this.stationInstances = 0;
};
let instances = 0;
let line_instances = 0;
export function drawStation(fName,sName, style, type, posX, posY, lineColor) {
    var svgns = "http://www.w3.org/2000/svg";
    switch(type){
        case 'destination':
            if(style == 'rect' && type != 'exchange'){
                var rect = document.createElementNS( svgns, style);
                rect.setAttributeNS( null,'id',instances);
                rect.setAttributeNS( null,'x',posX-15);
                rect.setAttributeNS( null,'y',posY-15);
                rect.setAttributeNS( null,'width', '30');
                rect.setAttributeNS( null,'height','30');
                rect.setAttributeNS( null,'fill', '#FFFFFF');
                rect.setAttributeNS( null,'stroke-width', '3');
                rect.setAttributeNS( null,'stroke', '#000000');
                document.getElementById( 'canvas' ).appendChild( rect );

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName+''+sName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-family', 'verdana');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'canvas' ).appendChild( first_name );
                // second_name.innerHTML = sName;
                // second_name.setAttributeNS(null, 'x', posX-rect.getAttributeNS(null ,'width')*1.35);
                // second_name.setAttributeNS(null, 'y', posY-25);
                // second_name.setAttributeNS(null, 'class', 'stationNames');
                // second_name.setAttributeNS(null, 'font-size', '16');
                // second_name.setAttributeNS(null, 'font-family', 'verdana');
                // second_name.setAttributeNS(null, 'font-weight', '700');
                // document.getElementById( 'canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                var circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);
                circle.setAttributeNS( null,'cx',posX-15);
                circle.setAttributeNS( null,'cy', posY-15);
                circle.setAttributeNS( null,'r', '20');
                circle.setAttributeNS( null,'fill','#FFFFFF');
                circle.setAttributeNS( null,'stroke-width', '3');
                circle.setAttributeNS( null,'stroke', '#000000');
                document.getElementById( 'canvas' ).appendChild( circle );
                
                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName+''+sName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-family', 'verdana');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'canvas' ).appendChild( first_name );
                // second_name.innerHTML = sName;
                // second_name.setAttributeNS(null, 'x', posX-rect.getAttributeNS(null ,'width')*1.35);
                // second_name.setAttributeNS(null, 'y', posY-25);
                // second_name.setAttributeNS(null, 'class', 'stationNames');
                // second_name.setAttributeNS(null, 'font-size', '16');
                // second_name.setAttributeNS(null, 'font-family', 'verdana');
                // second_name.setAttributeNS(null, 'font-weight', '700');
                // document.getElementById( 'canvas' ).appendChild( second_name );
            }
            break;
        case 'exchange':
            var inter = document.createElementNS( svgns, style);
            inter.setAttributeNS( null,'id',instances);
            inter.setAttributeNS( null,'id',instances);
            inter.setAttributeNS( null,'x',posX);
            inter.setAttributeNS( null,'y',posY+15);
            inter.setAttributeNS( null,'width', '40');
            inter.setAttributeNS( null,'height','80');
            inter.setAttributeNS( null,'rx', '20');
            inter.setAttributeNS( null,'ry','20');
            inter.setAttributeNS( null,'fill','#FFFFFF');
            inter.setAttributeNS( null,'stroke-width', '3');
            inter.setAttributeNS( null,'stroke', '#000000');
            document.getElementById( 'canvas' ).appendChild( inter );

            var first_name = document.createElementNS(svgns, 'text');
            var second_name = document.createElementNS(svgns, 'text');
            first_name.innerHTML = fName+''+sName;
            first_name.setAttributeNS(null, 'x', posX);
            first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
            first_name.setAttributeNS(null, 'class', 'stationNames');
            first_name.setAttributeNS(null, 'font-size', '16');
            first_name.setAttributeNS(null, 'font-family', 'verdana');
            first_name.setAttributeNS(null, 'font-weight', '700');
            document.getElementById( 'canvas' ).appendChild( first_name );
            // second_name.innerHTML = sName;
            // second_name.setAttributeNS(null, 'x', posX-inter.getAttributeNS(null ,'width'));
            // second_name.setAttributeNS(null, 'y', posY-25);
            // second_name.setAttributeNS(null, 'class', 'stationNames');
            // second_name.setAttributeNS(null, 'font-size', '16');
            // second_name.setAttributeNS(null, 'font-family', 'verdana');
            // second_name.setAttributeNS(null, 'font-weight', '700');
            // document.getElementById( 'canvas' ).appendChild( second_name );
            break;
        case 'common':
            if(style == 'rect' && type != 'exchange'){
                var rect = document.createElementNS( svgns, style);
                rect.setAttributeNS( null,'id',instances);
                rect.setAttributeNS( null,'x',posX-10);
                rect.setAttributeNS( null,'y',posY-10);
                rect.setAttributeNS( null,'width', '20');
                rect.setAttributeNS( null,'height','20');
                rect.setAttributeNS( null,'fill',lineColor);
                document.getElementById( 'canvas' ).appendChild( rect );

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName+''+sName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-family', 'verdana');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'canvas' ).appendChild( first_name );
                // second_name.innerHTML = sName;
                // second_name.setAttributeNS(null, 'x', posX-rect.getAttributeNS(null ,'width'));
                // second_name.setAttributeNS(null, 'y', posY-25);
                // second_name.setAttributeNS(null, 'class', 'stationNames');
                // second_name.setAttributeNS(null, 'font-size', '16');
                // second_name.setAttributeNS(null, 'font-family', 'verdana');
                // second_name.setAttributeNS(null, 'font-weight', '700');
                // document.getElementById( 'canvas' ).appendChild( second_name );
            }else if(style == 'circle'){
                var circle = document.createElementNS( svgns, style);
                circle.setAttributeNS( null,'id',instances);
                circle.setAttributeNS( null,'cx',posX);
                circle.setAttributeNS( null,'cy', posY);
                circle.setAttributeNS( null,'r', '10');
                circle.setAttributeNS( null,'fill',lineColor);
                document.getElementById( 'canvas' ).appendChild( circle );

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName+''+sName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
                first_name.setAttributeNS(null, 'id', instances);
                first_name.setAttributeNS(null, 'class', 'stationNames');
                first_name.setAttributeNS(null, 'font-size', '16');
                first_name.setAttributeNS(null, 'font-family', 'verdana');
                first_name.setAttributeNS(null, 'font-weight', '700');
                document.getElementById( 'canvas' ).appendChild( first_name );
                // second_name.innerHTML = sName;
                // second_name.setAttributeNS(null, 'x', posX-circle.getAttributeNS(null ,'width'));
                // second_name.setAttributeNS(null, 'y', posY-25);
                // second_name.setAttributeNS(null, 'class', 'stationNames');
                // second_name.setAttributeNS(null, 'font-size', '16');
                // second_name.setAttributeNS(null, 'font-family', 'verdana');
                // second_name.setAttributeNS(null, 'font-weight', '700');
                // document.getElementById( 'canvas' ).appendChild( second_name );
            }
            break;
    }
    instances++;

  };
export function drawLine(color, thicness, beginX, beginY, endX, endY, style, line_instance){
    var svgns = "http://www.w3.org/2000/svg";
    if(document.getElementById('line_' + line_instance) == null){
        var path = document.createElementNS(svgns, 'path');
        path.setAttributeNS(null, 'd', 'M');
    }
    else{
        var path = document.getElementById('line_' + line_instance);
    }
    var d = path.getAttributeNS(null, 'd');
    var x = 0;
    var y = 0;
    var Sx = 0;
    var Sy = 0;
    //math behind the connection a the butt section
    if(style == 'a'){
        d += beginX + ' ' + beginY + ' ';
        if(endX > beginX){
            x = endX-24;
        }else if(endX < beginX){
            x = endX+24;
        }else if(endX == beginX){
            x = endX;
        }
        if(endY < beginY){
            y = beginY+0.85;
        }else if(endY > beginY){
            y = beginY-0.85;
        }else{
            y = endY;
        }
        d += 'L' + x + ' ' + y + ' ';
        if(endX > beginX){
            x = endX-25;
        }else if(endX < beginX){
            x = endX+25;
        }else if(endX == beginX){
            x = endX;
        }
        d += 'M' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = beginY+26.5;
        }else if(endY < beginY){
            y = beginY-26.5;
        }else if(endY == beginY){
            y = beginY;
        }
        x = endX;

        d += 'L' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = beginY+25;
        }else if(endY < beginY){
            y = beginY-25;
        }else if(endY == beginY){
            y = beginY;
        }
        d += 'M' + x + ' ' + y + ' ';
        
        y = endY;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', color);
        
        
    }else if(style == 'b'){
        d += beginX + ' ' + beginY + ' ';
        if(endX < beginX){
            x = beginX+0.85;
        }else if(endX > beginX){
            x = beginX-0.85;
        }else{
            x = endX;
        }
        if(endY == beginY){
            y = endY;
        }else if(endY > beginY){
            y = endY-24;
        }else{
            y = endY+24;
        }

        d += 'L' + x + ' ' + y + ' ';
        if(endY == beginY){
            y = endY;
        }else if(endY > beginY){
            y = endY-25;
        }else{
            y = endY+25;
        }
        d += 'M' + x + ' ' + y + ' ';

        y = endY;

        if(endX > beginX){
            x = beginX+26.5;
        }else if(endX < beginX){
            x = beginX-26.5;
        }else if(endX == beginX){
            x = beginX;
        }
        
        d += 'L' + x + ' ' + y + ' ';
        if(endX > beginX){
            x = beginX+25;
        }else if(endX < beginX){
            x = beginX-25;
        }else if(endX == beginX){
            x = beginX;
        }
        d += 'M' + x + ' ' + y + ' ';
        
        x = endX;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', color);
        
    }
    document.getElementById( 'canvas' ).appendChild( path );
    line_instances++;
};

export function drawStationsList(network, instancesLine){
    var st_list = document.getElementById('content');
    st_list.innerHTML = "";
    for(let i = 0; i < network.lines.length; i++){
        let lineElement = document.createElement('div');
        let lineText = document.createElement('h3');
        lineText.innerHTML = "ligne_" + instancesLine;
        lineText.setAttributeNS(null, 'class', 'line_name');
        lineElement.setAttributeNS(null, 'id', i);
        lineElement.setAttributeNS(null, 'class', 'line_section');
        lineElement.appendChild(lineText);
        st_list.appendChild(lineElement);
        for(let j = 0; j < network.lines[instancesLine].stations.length; j++){
            let stationButton = document.createElement('a');
            stationButton.innerText = network.lines[instancesLine].stations[j].fName;
            stationButton.setAttributeNS(null, 'id', j);
            stationButton.setAttributeNS(null, 'class', 'station_instance');
            stationButton.setAttributeNS(null, 'onclick', "showEditor('options', 'st-editor');");
            lineElement.appendChild(stationButton);
        }
    }
}
