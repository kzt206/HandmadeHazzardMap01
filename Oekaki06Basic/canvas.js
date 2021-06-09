window.addEventListener("load",()=>{

    const canvas01 = document.querySelector("#canvas01");
    const ctx01 = canvas01.getContext("2d");
    const canvas02 = document.querySelector("#canvas02");
    const ctx02 = canvas02.getContext("2d");

   canvas01.width = 300;
   canvas01.height = 200;

   canvas02.width = 500;
   canvas02.height = 300;
   
    ctx01.fillRect(10,10,30,20);
    // ctx02.fillRect(20,30,50,100);

    console.log("hello");

    const buttonTest = document.getElementById("testButton");
    buttonTest.addEventListener("click",function(event){
        console.log("button pushed");
    });

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

    console.log("hello2");
    // ctx01.drawImage(img,0,0,canvas01.width,canvas01.heigth);
    ctx01.fillRect(30,50,30,20);


});