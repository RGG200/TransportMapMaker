export function Station(fName, sName, type, style, xPos, yPos){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
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
};
let instances = 0;
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
export function drawLine(color, thicness, beginX, beginY, endX, endY){
    var svgns = "http://www.w3.org/2000/svg";
    var line = document.createElementNS( svgns, 'line');
    line.setAttributeNS( null,'id',instances);
    line.setAttributeNS( null,'id',instances);
    line.setAttributeNS( null,'x1',beginX);
    line.setAttributeNS( null,'y1',beginY);
    line.setAttributeNS( null,'x2',endX);
    line.setAttributeNS( null,'y2',endY);
    line.setAttributeNS( null,'fill', color);
    line.setAttributeNS( null,'stroke-width', thicness);
    line.setAttributeNS( null,'stroke', color);
    document.getElementById( 'canvas' ).appendChild( line );
};