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
    //document.getElementById("card").innerHTML = `<h1>`+myJson.data[0]["image"]["data"]+`</h1>`;
    var da=myJson.data[0]["image"];
    console.log(toBase64( da["data"]))
    document.getElementById("card").innerHTML = `<img src="data:image/png;base64,${toBase64( da["data"])}"/>`;

  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

  