//Class hình chữ nhật
class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(canvas){
        let context = canvas.getContext("2d");
        context.strokeStyle = this.color;
        context.strokeRect(this.x, this.y, this.width, this.height);
    }
}

let aRectangle = new Rectangle(10, 10, Math.floor(Math.random()*100),Math.floor(Math.random()*100), "#ff0000");
let canvas = document.getElementById("cau-4-canvas");
aRectangle.render(canvas);