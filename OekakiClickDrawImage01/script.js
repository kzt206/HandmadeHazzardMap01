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
window.addEventListener('load',()=>{

    const canvas1 = document.querySelector('#canvas1');
    const context1 = canvas1.getContext('2d');

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
