var selFile1 = document.getElementById('selectFile1'); // input type="file"の要素取得
var selFile2 = document.getElementById('selectFile2'); // input type="file"の要素取得

const canvasBack = document.getElementById('canvas-back'); // canvasの要素取得
const canvasBack2 = document.getElementById('canvas-back2'); // canvasの要素取得
// const canvasDraw = document.querySelector('canvas-draw');
const ctxBack = canvasBack.getContext('2d');
const ctxBack2 = canvasBack2.getContext('2d');

// const canvasForward = document.getElementById('canvas-forward');
// // canvasForward.width = width/2;
// // canvasForward.height = height/2;
// const ctxForward = canvasForward.getContext('2d');

//キャンバスサイズの指定
const width = 1007; //1007
const height = 703; // 703
canvasBack.width = width;
canvasBack.height = height;
canvasBack2.width = width/3;
canvasBack2.height = height/3;
// canvasForward.width= width/2;
// canvasForward.height = height/2;

selFile1.addEventListener("change", function(evt){
    var file = evt.target.files; // fileの取得
    var reader = new FileReader();
   
    reader.readAsDataURL(file[0]); // fileの要素をdataURL形式で読み込む
   
    // ファイルを読み込んだ時に実行する
    reader.onload = function(){
     var dataUrl = reader.result; // 読み込んだファイルURL
     var img = new Image(); // 画像
   
     img.src = dataUrl;
   
     // 画像が読み込んだ時に実行する
   　img.onload = function() {
      // canvasに画像ソースを設定する
      // ctx.drawImage(img, 0, 0);
   
      // 画像のサイズを設定する場合
      ctxBack.drawImage(img, 0, 0, canvasBack.width, canvasBack.height); //heightとwidthも合わせて設定可能
      }
     }
}, false);

selFile2.addEventListener("change", function(evt){
    var file = evt.target.files; // fileの取得
    var reader = new FileReader();
   
    reader.readAsDataURL(file[0]); // fileの要素をdataURL形式で読み込む
   
    // ファイルを読み込んだ時に実行する
    reader.onload = function(){
     var dataUrl = reader.result; // 読み込んだファイルURL
     var img = new Image(); // 画像
   
     img.src = dataUrl;
   
     // 画像が読み込んだ時に実行する
   　img.onload = function() {
      // canvasに画像ソースを設定する
      // ctx.drawImage(img, 0, 0);
   
      // 画像のサイズを設定する場合
      ctxBack2.drawImage(img, 0, 0, canvasBack2.width, canvasBack2.height); //heightとwidthも合わせて設定可能
      }
     }
}, false);

// ページの読み込みが完了したらコールバック関数が呼ばれる
// ※コールバック: 第2引数の無名関数(=関数名が省略された関数)
window.addEventListener('load', () => {
    // const canvasForward = document.querySelector('#canvas-fowrard');
    const canvasForward = document.getElementById('canvas-forward');
    canvasForward.width = width/2;
    canvasForward.height = height/2;
    // contextを使ってcanvasに絵を書いていく
    const ctxForward = canvasForward.getContext('2d');
  
    // 直前のマウスのcanvas上のx座標とy座標を記録する
    const lastPosition = { x: null, y: null };
  
    // マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
    let isDrag = false;
  
    // 絵を書く
    function draw(x, y) {
      // マウスがドラッグされていなかったら処理を中断する。
      // ドラッグしながらしか絵を書くことが出来ない。
      if(!isDrag) {
        return;
      }
  
      // 「context.beginPath()」と「context.closePath()」を都度draw関数内で実行するよりも、
      // 線の描き始め(dragStart関数)と線の描き終わり(dragEnd)で1回ずつ読んだほうがより綺麗に線画書ける
  
      // 線の状態を定義する
      // MDN CanvasRenderingContext2D: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
      ctxForward.lineCap = 'round'; // 丸みを帯びた線にする
      ctxForward.lineCap.lineJoin = 'round'; // 丸みを帯びた線にする
      ctxForward.lineCap.lineWidth = 5; // 線の太さ
      ctxForward.lineCap.strokeStyle = 'black'; // 線の色
  
      // 書き始めは lastPosition.x, lastPosition.y の値はnullとなっているため、
      // クリックしたところを開始点としている。
      // この関数(draw関数内)の最後の2行で lastPosition.xとlastPosition.yに
      // 現在のx, y座標を記録することで、次にマウスを動かした時に、
      // 前回の位置から現在のマウスの位置まで線を引くようになる。
      if (lastPosition.x === null || lastPosition.y === null) {
        // ドラッグ開始時の線の開始位置
        ctxForward.lineCap.moveTo(x, y);
      } else {
        // ドラッグ中の線の開始位置
        ctxForward.lineCap.moveTo(lastPosition.x, lastPosition.y);
      }
      // context.moveToで設定した位置から、context.lineToで設定した位置までの線を引く。
      // - 開始時はmoveToとlineToの値が同じであるためただの点となる。
      // - ドラッグ中はlastPosition変数で前回のマウス位置を記録しているため、
      //   前回の位置から現在の位置までの線(点のつながり)となる
      ctxForward.lineCap.lineTo(x, y);
  
      // context.moveTo, context.lineToの値を元に実際に線を引く
      ctxForward.lineCap.stroke();
  
      // 現在のマウス位置を記録して、次回線を書くときの開始点に使う
      lastPosition.x = x;
      lastPosition.y = y;
    }
  
    // canvas上に書いた絵を全部消す
    function clear() {
        ctxForward.lineCap.clearRect(0, 0, canvasForward.width, canvasForward.height);
    }
  
    // マウスのドラッグを開始したらisDragのフラグをtrueにしてdraw関数内で
    // お絵かき処理が途中で止まらないようにする
    function dragStart(event) {
      // これから新しい線を書き始めることを宣言する
      // 一連の線を書く処理が終了したらdragEnd関数内のclosePathで終了を宣言する
      ctxForward.beginPath();
  
      isDrag = true;
    }
    // マウスのドラッグが終了したら、もしくはマウスがcanvas外に移動したら
    // isDragのフラグをfalseにしてdraw関数内でお絵かき処理が中断されるようにする
    function dragEnd(event) {
      // 線を書く処理の終了を宣言する
      ctxForward.closePath();
      isDrag = false;
  
      // 描画中に記録していた値をリセットする
      lastPosition.x = null;
      lastPosition.y = null;
    }
  
    // マウス操作やボタンクリック時のイベント処理を定義する
    function initEventHandler() {
      const clearButton = document.querySelector('#clear-button');
      clearButton.addEventListener('click', clear);
  
      canvasForward.addEventListener('mousedown', dragStart);
      canvasForward.addEventListener('mouseup', dragEnd);
      canvasForward.addEventListener('mouseout', dragEnd);
      canvasForward.addEventListener('mousemove', (event) => {
        // eventの中の値を見たい場合は以下のようにconsole.log(event)で、
        // デベロッパーツールのコンソールに出力させると良い
        // console.log(event);
  
        draw(event.layerX, event.layerY);
      });
    }
  
    // イベント処理を初期化する
    initEventHandler();
  });

