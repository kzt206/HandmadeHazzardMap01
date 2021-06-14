const colorCircle = document.querySelectorAll(".color-circle");

//window.addEventListener("load",()=>{

    let penSize = 4;
    let isDrawing;
    let x;
    let y;


    const canvas01 = document.querySelector("#canvas01");
    const ctx01 = canvas01.getContext("2d");
    const canvas02 = document.querySelector("#canvas02");
    const ctx02 = canvas02.getContext("2d");

   canvas01.width = 800;
   canvas01.height = 560;

   canvas02.width = 800;
   canvas02.height = 560;
   
    // ctx01.fillRect(10,10,30,20);
    // ctx02.fillRect(20,30,50,100);

    const selectFile01 = document.getElementById("selectFile01");
    selectFile01.addEventListener("change",function(evt){

        console.log("file selector");

        let file = evt.target.files;
        let reader = new FileReader();

        reader.readAsDataURL(file[0]);

        console.log(file[0]);

        reader.onload = function(){
            let dataURL = reader.result;
            let img = new Image();

            img.src = dataURL;

            img.onload = function(){
                ctx01.drawImage(img,0,0,canvas01.width,canvas01.height);
            }
            // ctx02.fillRect(50,90,30,20);
        }

    },false);

    // console.log("hello2");
    // ctx01.drawImage(img,0,0,canvas01.width,canvas01.heigth);
    // ctx01.fillRect(30,50,30,20);


    //Draw Lines
     // 直前のマウスのcanvas上のx座標とy座標を記録する
    const lastPosition = { x: null, y: null };

    // マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
    let isDrag = false;

    ctx02.fillStyle = "hotpink";
    ctx02.strokeStyle = ctx02.fillStyle;

    function draw(x2,y2){
        if(isDrag){
            ctx02.beginPath();
            ctx02.arc(x2,y2,penSize,0,Math.PI * 2);
            ctx02.closePath();
            ctx02.fill();
            //draw line
            drawLine(x,y,x2,y2);
        }
        x = x2;
        y = y2;
    }

    function drawLine(x1,y1,x2,y2){
        ctx02.beginPath();
        ctx02.moveTo(x1,y1);
        ctx02.lineTo(x2,y2);
        ctx02.strokeStyle = ctx02.fillStyle;
        ctx02.lineWidth = penSize * 2;
        ctx02.stroke();
    }

    canvas02.addEventListener("mousedown",(e)=>{
        isDrag = true;
        x = e.offsetX;
        y = e.offsetY;

        // console.log(x,y)
    });

    canvas02.addEventListener("mouseup",()=>{
        isDrag = false;
        x = undefined;
        y = undefined;
    });
    canvas02.addEventListener("mousemove",(event)=>{
        draw(event.offsetX,event.offsetY);
    });


    // const clearButton = document.getElementById("clearButton");
    // clearButton.addEventListener("click",clear);

    // function clear(){
    //     ctx02.clearRect(0,0,canvas02.width,canvas02.height)
    // }

    document.querySelector(".fa-refresh").addEventListener("click",function(){
        ctx02.clearRect(0, 0,canvas02.width,canvas02.height);
    });



//});

const selectColor = (elem) => {

    removeActiveCircleColor();

    ctx02.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("active");
};

const removeActiveCircleColor = () =>{
    colorCircle.forEach((circle)=>{
        circle.classList.remove("active");
    });
};

const favColor = (elem) => {
    removeActiveCircleColor();
    ctx02.fillStyle = elem.value;
};

function penSizeChange(pensize){
    penSize = pensize
}


var createImage = function(context){
    console.log(context)
    var image = new Image();
    // context.fillRect(0,10,20,20);
    image.src = context.canvas.toDataURL();
    return image;
}

// var contextSave = document.createElement("canvas").getContext("2d");
// contextSave.drawImage(createImage(ctx01),0,0);
// contextSave.drawImage(createImage(ctx02),0,0);

const canvas03 = document.getElementById("canvas03");
canvas03.width = 200;
canvas03.height = 300;
const contextSave = canvas03.getContext("2d");


document.querySelector("a").addEventListener("click",(event)=> event.target.href = canvas02.toDataURL());
document.getElementById("contact").addEventListener("click",(event)=> console.log("contact clicked"));

// document.querySelector("a").addEventListener("click",(event)=> {
//     console.log("save mode")
//     // contextSave = document.createElement("canvas").getContext("2d");
//     contextSave.drawImage(createImage(ctx01),0,0,canvas03.width, canvas03.height);
//     contextSave.drawImage(createImage(ctx02),0,0,canvas03.width, canvas03.height);
//     document.body.appendChild(createImage(contextSave))
//     event.target.href = contextSave.canvas.toDataURL()
// });

