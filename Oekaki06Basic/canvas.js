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
    ctx02.fillRect(20,30,50,100);




});