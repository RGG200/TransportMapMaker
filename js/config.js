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
};
export function drawStation(style, posX, posY) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.shadowBlur = 15;
    ctx.lineWidth = 2;
    if(style == 'rect'){
        ctx.strokeRect(posX, posY, 10, 10);
        ctx.fillRect(posX, posY, 10, 10);
    }else if(style == 'circle'){
        ctx.beginPath();
        ctx.arc(posX, posY, 20, 1, 2 * Math.PI);
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