window.addEventListener("load",()=>{

    var canvas01 = document.querySelector("#canvas01");
    var ctx01 = canvas01.getContext("2d");
    var canvas02 = document.querySelector("#canvas02");
    var ctx02 = canvas02.getContext("2d");

   canvas01.width = 300;
   canvas01.height = 200;

   canvas02.width = 500;
   canvas02.height = 300;
   
    ctx01.fillRect(10,10,20,20);
    ctx02.fillRect(20,30,50,100);

});