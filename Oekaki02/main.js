//https://step-learn.com/article/javascript/142-canvas-image.html

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Image オブジェクトを生成
var img = new Image();
img.src = '001.png';

// 画像読み込み終了してから描画
img.onload = function(){
    c.drawImage(img, 10, 10);
}
