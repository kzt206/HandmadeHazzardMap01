// https://qiita.com/No_LINE/items/d3a9dada9f98a7819693
// https://qiita.com/tsuyopon_xyz/items/1df124d4ecec69bd4fff  

var selFile = document.getElementById('selectFile'); // input type="file"の要素取得
var c = document.getElementById('canvas'); // canvasの要素取得
var ctx = c.getContext('2d');

//キャンバスサイズの指定
c.width = 1007;
c.height = 703;

selFile.addEventListener("change", function(evt){
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
   ctx.drawImage(img, 0, 0, c.width, c.height); heightとwidthも合わせて設定可能
   }
  }
}, false);
