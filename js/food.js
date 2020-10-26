function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }


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
    document.getElementById("itemIMG").innerHTML = `<img style="height:35vh; width:19vw; border-radius: 30px;" src="data:image/png;base64,${toBase64( da["data"])}"/>`;
    //document.getElementById("itemIMG1").src=toBase64( da['data']);
    document.getElementById("itemName").innerHTML = myJson.data[0]["name"];
    document.getElementById("itemDesc").innerHTML = myJson.data[0]["description"];
    document.getElementById("itemPrice").innerHTML = myJson.data[0]["price"];

  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

  