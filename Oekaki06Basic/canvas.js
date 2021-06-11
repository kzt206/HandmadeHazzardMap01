window.addEventListener("load",()=>{

    const canvas01 = document.querySelector("#canvas01");
    const ctx01 = canvas01.getContext("2d");
    const canvas02 = document.querySelector("#canvas02");
    const ctx02 = canvas02.getContext("2d");

   canvas01.width = 800;
   canvas01.height = 400;

   canvas02.width = 800;
   canvas02.height = 400;
   
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
            ctx02.fillRect(50,90,30,20);
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

    function startPosition(){
        isDrag = true;
    }
    function finishedPosition(){
        isDrag = false;
    }

    function draw(e){
        if(!isDrag) return;
        ctx02.lineWidth = 5;
        ctx02.lineCap  = "round";
        
        ctx02.lineTo(e.clientX,e.clientY);
        ctx02.stroke();
    }

    canvas02.addEventListener("mousedown",startPosition);
    canvas02.addEventListener("mouseup",finishedPosition);
    canvas02.addEventListener("mousemove",draw);


    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click",clear);

    function clear(){
        ctx02.clearRect(0,0,canvas02.width,canvas02.height)
    }

});