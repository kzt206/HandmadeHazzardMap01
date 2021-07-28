// https://teratail.com/questions/238413
// {sample-code}
// this.canvas.addEventListener("click", (e) => {
//     var that = this // fix: 現在のcanvasへのコンテキストを保存しておく
//     var rect = e.target.getBoundingClientRect()
//     var x = e.clientX - rect.left
//     var y = e.clientY - rect.top
// 　　　
// 　　　　　　//ここの処理が動きません。
//     var img = new Image()            
//     img.onload = function() {

// 　　　　　　　　//img.srcと、xy座標は正しく取得できています
//         alert(img.src)
//         alert(x,y)
//         that.ctx.drawImage(img, x, y) // fix: thisコンテキストがimgだと思うのでcanvasが取れるようにthatに修正

//     };
//     img.src = "pin.png"


//     //ここの処理（クリックした座標に点をかく）は動作します。
//     this.ctx.beginPath();
//     this.ctx.arc(x, y, 5, 0, Math.PI * 2, false);
//     this.ctx.fill();

// });


window.onload = () =>{
    // canvas準備
  const board = document.querySelector("#canvas1");  //getElementById()等でも可。オブジェクトが取れれば良い。
  const ctx = board.getContext("2d");

  // 画像読み込み
  const chara = new Image();
  chara.src = "pin2.png";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 100, 150);
  };

  this.canvas1.addEventListener("click",(e) => {
      let x = e.offsetX;
      let y = e.offsetY;

      console.log("x:",x,"y:",y);
      ctx.drawImage(chara,x,y);
  })

};

/*
window.addEventListener('load',()=>{

    const canvas1 = document.querySelector('#canvas1');
    const context1 = canvas1.getContext('2d');

    let img2 = new Image();
    img2.src = "pin2.png";
    img2.onload = function(){
        context1.drawImage(img2,0,0);
    }
     // マウス操作やボタンクリック時のイベント処理を定義する
  
        this.canvas1.addEventListener("click", (e) => {
            var that = this // fix: 現在のcanvasへのコンテキストを保存しておく
            var rect = e.target.getBoundingClientRect()
            var x = e.clientX - rect.left
            var y = e.clientY - rect.top
　　　
　　　　　　//ここの処理が動きません。
            var img = new Image()
            img.onload = function() {

　　　　　　　　//img.srcと、xy座標は正しく取得できています
                alert(img.src)
                // alert(x,y);
                that.context1.drawImage(img, x, y) // fix: thisコンテキストがimgだと思うのでcanvasが取れるようにthatに修正

            };
            img.src = "pin2.png"


            //ここの処理（クリックした座標に点をかく）は動作します。
            this.ctx.beginPath();
            this.ctx.arc(x, y, 5, 0, Math.PI * 2, false);
            this.ctx.fill();

        });
    

});
*/