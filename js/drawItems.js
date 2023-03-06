export function Station(fName, sName, type, line_style, style, xPos, yPos){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
    this.line_style = line_style;
    this.selected = false;
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
            instances++;
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
            instances++;
            break;
        case 'common':
            if(style == 'rect' && type != 'exchange'){
                var rect = document.createElementNS( svgns, style);
                rect.setAttributeNS( null,'id',instances);
                rect.setAttributeNS( null,'x',posX);
                rect.setAttributeNS( null,'y',posY);
                rect.setAttributeNS( null,'width', '20');
                rect.setAttributeNS( null,'height','20');
                rect.setAttributeNS( null,'fill',lineColor);
                document.getElementById( 'canvas' ).appendChild( rect );

                var first_name = document.createElementNS(svgns, 'text');
                var second_name = document.createElementNS(svgns, 'text');
                first_name.innerHTML = fName+''+sName;
                first_name.setAttributeNS(null, 'x', posX);
                first_name.setAttributeNS(null, 'y', posY-30);
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
            instances++;
            break;
    }

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
    var line = document.createElementNS( svgns, 'line');
    var line2 = document.createElementNS( svgns, 'line');
    var line3 = document.createElementNS( svgns, 'line');
    var x = 0;
    var y = 0;
    if(style == 'a'){
        d += beginX + ' ' + beginY + ' ';
        if(endX > beginX){
            x = endX-25;
        }else if(endX < beginX){
            x = endX+25;
        }else if(endX == beginX){
            x = endX;
        }
        if(endY != beginY){
            y = beginY;
        }else{
            y = endY;
        }
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';
        if(endY > beginY){
            y = beginY+25;
        }else if(endY < beginY){
            y = beginY-25;
        }else if(endY == beginY){
            y = beginY;
        }
        x = endX;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';
        y = endY;
        d += 'L' + x + ' ' + y + ' ';
        d += 'M' + x + ' ' + y + ' ';

        path.setAttributeNS(null, 'd', d);
        path.setAttributeNS(null, 'id', 'line_' + line_instance);
        path.setAttributeNS(null, 'stroke', color);
        path.setAttributeNS(null, 'stroke-width', thicness);
        path.setAttributeNS(null, 'fill', color);
        // line.setAttributeNS( null,'id', line_instances);
        // line.setAttributeNS( null,'class','first');
        // line.setAttributeNS( null,'x1',beginX);
        // line.setAttributeNS( null,'y1',beginY);
        // if(endY == beginY){
        //     line.setAttributeNS( null,'y2',endY);
        // }else{
        //     line.setAttributeNS( null,'y2',beginY);
        // }
        // if(beginX == endX){
        //     line.setAttributeNS( null,'x2',endX);
        // }else if(beginX > endX){
        //     line.setAttributeNS( null,'x2',endX+25);
        // }else if(beginX < endX){
        //     line.setAttributeNS( null,'x2',endX-25);
        // }
        // line.setAttributeNS( null,'fill', color);
        // line.setAttributeNS( null,'stroke-width', thicness);
        // line.setAttributeNS( null,'stroke', color);
    
        // line2.setAttributeNS( null,'id',line_instances);
        // line2.setAttributeNS( null,'class','diag');
        // if(beginX == endX){
        //     line2.setAttributeNS( null,'x1',endX);
        // }else if(beginX > endX){
        //     line2.setAttributeNS( null,'x1',endX+25);
        // }else if(beginX < endX){
        //     line2.setAttributeNS( null,'x1',endX-25);
        // }
        // if(endY == beginY){
        //     line2.setAttributeNS( null,'y1',endY);
        // }else{
        //     line2.setAttributeNS( null,'y1',beginY);
        // }
        // line2.setAttributeNS( null,'x2',endX);
        // if(beginY == endY){
        //     line2.setAttributeNS( null,'y2',beginY);
        // }else if(beginY > endY){
        //     line2.setAttributeNS( null,'y2',beginY-26.35);
        // }else{
        //     line2.setAttributeNS( null,'y2',beginY+26.35);
        // }
        // line2.setAttributeNS( null,'fill', color);
        // line2.setAttributeNS( null,'stroke-width', thicness);
        // line2.setAttributeNS( null,'stroke', color);
    
        // line3.setAttributeNS( null,'id',line_instances);
        // line3.setAttributeNS( null,'class','second');
        // line3.setAttributeNS( null,'x1',endX);
        // if(beginY == endY){
        //     line3.setAttributeNS( null,'y1',beginY);
        // }else if(beginY > endY){
        //     line3.setAttributeNS( null,'y1',beginY-26.35);
        // }else{
        //     line3.setAttributeNS( null,'y1',beginY+26.35);
        // }
        // line3.setAttributeNS( null,'x2',endX);
        // line3.setAttributeNS( null,'y2',endY);
        // line3.setAttributeNS( null,'fill', color);
        // line3.setAttributeNS( null,'stroke-width', thicness);
        // line3.setAttributeNS( null,'stroke', color);

        
    }else if(style == 'b'){
        line.setAttributeNS( null,'id',line_instances);
        line.setAttributeNS( null,'class','first');
        line.setAttributeNS( null,'x1',beginX);
        line.setAttributeNS( null,'y1',beginY);
        if(endX == beginX){
            line.setAttributeNS( null,'x2',endX);
        }else{
            line.setAttributeNS( null,'x2',beginX);
        }
        if(beginY == endY){
            line.setAttributeNS( null,'y2',endY);
        }else if(beginY > endY){
            line.setAttributeNS( null,'y2',endY+25);
        }else if(beginY < endY){
            line.setAttributeNS( null,'y2',endY-25);
        }
        line.setAttributeNS( null,'fill', color);
        line.setAttributeNS( null,'stroke-width', thicness);
        line.setAttributeNS( null,'stroke', color);
    
        line2.setAttributeNS( null,'id',line_instances);
        line2.setAttributeNS( null,'class','diag');
        line2.setAttributeNS( null,'x1',beginX);
        if(beginY == endY){
            line2.setAttributeNS( null,'y1',endY);
        }else if(beginY > endY){
            line2.setAttributeNS( null,'y1',endY+26.35);
        }else{
            line2.setAttributeNS( null,'y1',endY-26.35);
        }
        if(beginX == endX){
            line2.setAttributeNS( null,'x2',beginX);
        }else if(beginX > endX){
            line2.setAttributeNS( null,'x2',beginX-26.35);
        }else{
            line2.setAttributeNS( null,'x2',beginX+26.35);
        }
        line2.setAttributeNS( null,'y2',endY);
        line2.setAttributeNS( null,'fill', color);
        line2.setAttributeNS( null,'stroke-width', thicness);
        line2.setAttributeNS( null,'stroke', color);
    
        line3.setAttributeNS( null,'id',line_instances);
        line3.setAttributeNS( null,'class','second');
        if(beginX == endX){
            line3.setAttributeNS( null,'x1',beginX);
        }else if(beginX > endX){
            line3.setAttributeNS( null,'x1',beginX-25);
        }else{
            line3.setAttributeNS( null,'x1',beginX+25);
        }
        line3.setAttributeNS( null,'y1',endY);
        line3.setAttributeNS( null,'x2',endX);
        line3.setAttributeNS( null,'y2',endY);
        line3.setAttributeNS( null,'fill', color);
        line3.setAttributeNS( null,'stroke-width', thicness);
        line3.setAttributeNS( null,'stroke', color);
        document.getElementById( 'canvas' ).appendChild( line );
        document.getElementById( 'canvas' ).appendChild( line2 );
        document.getElementById( 'canvas' ).appendChild( line3 );
    }
    document.getElementById( 'canvas' ).appendChild( path );
    line_instances++;
};

export function drawStationsList(network){
    var st_list = document.getElementById('st-list');
    for(station of network.lines[instancesLine].stations){
        let stationButton = document.createElement('a');
        stationButton.innerText = station.fName;
        stationButton.setAttributeNS(null, 'id', network.lines[instancesLine].stations.indexOf(station));
        stationButton.setAttributeNS(null, 'class', 'station_instance');
        st_list.appendChild(stationButton);
    }
}