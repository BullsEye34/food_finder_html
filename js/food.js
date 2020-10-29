
function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

 console.log(isAdm)

fetch("http://localhost:3000/items")
  .then(function (response) {
    return response.json();
  })
  .then(function  (myJson) {
    console.log(myJson.data[0]);
    var da=myJson.data[0]["image"]; 
    /*console.log(toBase64( da["data"]))
    console.log("data:image/png;base64,${toBase64( da['data'])}") */
    //document.getElementById("card").innerHTML = `<img src="data:image/png;base64,${toBase64( da["data"])}"/>`;
    //document.getElementById("itemIMG1").src=toBase64( da['data']);
/* 
    var html =(` <div class="mdc-layout-grid__cell--span-6">
    <div class="item">
    <div class="img" id="itemIMG">
        <img id="itemIMG1" src="" alt="" srcset="">
    </div>
    <div class="otherDetails">
        <h1 class="mdc-typography--headline5" style="font-size: 30px; font-weight: 900;" id="itemName"></h1>
        <h3 class="mdc-typography--caption" style="font-size: 20px; height: 60px; line-clamp: 5; text-overflow: ellipsis;overflow: hidden; " id="itemDesc"></h3>
        <h2 class="mdc-typography--headline5" style="font-size: 30px;" id="itemPrice"></h2>
    </div>
</div> </div>`);

var totalHtml=html; */



/* 
     document.getElementById("itemIMG").innerHTML = `<img style="height:25vh; width:9vw; border-radius: 30px;" src="data:image/png;base64,${toBase64( da["data"])}"/>`;
    document.getElementById("itemName").innerHTML = myJson.data[0]["name"];
    document.getElementById("itemDesc").innerHTML = myJson.data[0]["description"];
    document.getElementById("itemPrice").innerHTML = myJson.data[0]["price"];   */
    var i=0;
    var totalHtml=`<br>`;
    while(i < myJson.data.length){
      var html =(` <li id=${i}><div class="mdc-layout-grid__cell--span-6">
      <div class="item">
      <div class="img" id="itemIMG">
      <img style="height:25vh; width:9vw; border-radius: 30px;" src="data:image/png;base64,${toBase64( myJson.data[i]["image"]["data"])}"/>
      </div>
      <div class="otherDetails">
          <h1 class="mdc-typography--headline5" style="font-size: 30px; font-weight: 900;" id="itemName">${myJson.data[i]["name"]}</h1>
          <h3 class="mdc-typography--caption" style="font-size: 20px; height: 60px; line-clamp: 5; text-overflow: ellipsis;overflow: hidden; " id="itemDesc">${myJson.data[i]["description"]}</h3>
          <h2 class="mdc-typography--headline5" style="font-size: 30px;" id="itemPrice">${myJson.data[i]["price"]}</h2>
      </div>
  </div> </div></li>`);
totalHtml+=html;
      i++;
    }
    
document.getElementById("card").innerHTML = totalHtml;

  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

  