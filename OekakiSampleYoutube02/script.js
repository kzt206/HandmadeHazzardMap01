const colorCircle = document.querySelectorAll(".color-circle");

let penSize = 10;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;

    // console.log(x,y);
});

canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove",(event)=>{
    draw(event.offsetX,event.offsetY);
});

ctx.fillStyle = "hotpink";
ctx.strokeStyle = ctx.fillStyle;

function draw(x2,y2){
    if(isDrawing){
        ctx.beginPath();
        ctx.arc(x2,y2,penSize,0,Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        //draw line
        drawLine(x,y,x2,y2);
    }
    x = x2;
    y = y2;
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = penSize * 2;
    ctx.stroke();
}

document.querySelector(".fa-refresh").addEventListener("click",function(){
    ctx.clearRect(0, 0,canvas.width,canvas.height);
});

const selectColor = (elem) => {

    removeActiveCircleColor();

    ctx.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("active");
};

const removeActiveCircleColor = () =>{
    colorCircle.forEach((circle)=>{
        circle.classList.remove("active");
    });
};

function penSizeChange(pensize){
    penSize = pensize
}

const favColor = (elem) => {
    removeActiveCircleColor();
    ctx.fillStyle = elem.value;
};

document.querySelector("a").addEventListener("click",(event)=> event.target.href = canvas.toDataURL());