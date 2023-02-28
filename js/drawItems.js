export function Station(fName, sName, type, style, xPos, yPos){
    this.fName = fName;
    this.sName = sName;
    this.style = style;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
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
    this.stationInstances = 0;
};
export function drawStation(name, style, type, posX, posY, lineColor) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.shadowBlur = 15;
    ctx.textAlign = 'center';
    ctx.fontWeight = '500';
    ctx.font = '16px verdana';
    if(type == 'destination' || type == 'exchange'){
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        if(style == 'rect'){
            ctx.lineWidth = 2;
            ctx.strokeRect(posX, posY, 15, 15);
            ctx.fillRect(posX, posY, 15, 15);
            ctx.fillStyle = "black";
            ctx.fillText(name, posX+7.5, posY-10);
        }else if(style == 'inter'){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(posX+3.75, posY-7.5, 15, 30, 8);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.fillText(name, posX+3.75, posY-10);
        }
        else if(style == 'circle'){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(posX+7.5, posY-7.5, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.fillText(name, posX+7.5, posY-10);
        }
        ctx.stroke(); 
    }else{
        ctx.strokeStyle = lineColor;
        ctx.fillStyle = lineColor;
        if(style == 'rect'){
            ctx.lineWidth = 2;
            ctx.fillRect(posX, posY, 10, 10);
            ctx.fillStyle = "black";
            ctx.fillText(name, posX+5, posY-10);
        }else if(style == 'circle'){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(posX+5, posY+5, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.fillText(name, posX+5, posY-10);
        }
        ctx.stroke(); 
    }

  };
export function drawLine(color, thicness, beginX, beginY, endX, endY){
    const canvas = document.getElementById('st_canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = thicness;
    ctx.moveTo(beginX+5, beginY+5);
    ctx.lineTo(endX+5, endY+5);
    ctx.stroke();
};