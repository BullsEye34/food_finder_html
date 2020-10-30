
function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

 var cartItems;
 var totalItems;

fetch("http://localhost:3000/items")
  .then(function (response) {
    return response.json();
  })
  .then(function  (myJson) {
    console.log(myJson.data[0]);
    var i=0;
    var totalHtml=`<br>`;
    totalItems=myJson.data.length;
    while(i < myJson.data.length){
      var html =(` <li id=item${i}><div class="mdc-layout-grid__cell--span-6">
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


  document.getElementById("item0").addEventListener('click',function (){
    /**
     * 
     * To add to Cart
     * 
     *  */
    console.log("Yaay")
  
    cartItems.add(myJson.data[i])
    console.log(cartItems)
  })
  .catch(function (error) {
  console.log("Error: " + error);
  });
  



  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}