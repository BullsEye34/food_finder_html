
    var isAdm="f";
  document.getElementById("loginBtn").addEventListener('click',function (){
    /**
     * 
     * To go to Food HTML Page
     * 
     *  */
    
fetch("http://localhost:3000/auth")
.then(function (response) {
  return response.json();
})
.then(function  (myJson) {
    var uname=document.getElementById("uname").value
    var pwd=document.getElementById("pwd").value
    var result = false;
    var i=0;
    while(i<myJson.data.length){
        
        if(uname===myJson["data"][i]["username"] && pwd===myJson.data[i]["pass"]){
            if(myJson.data[i]["approved"]==="n"){
                alert("User Not Approved Yet!")
                return;
            }else{
                
            isAdm=myJson["data"][i]["admin"]
            result=true;
            }
        }
        
    i++;
    }
    if(result===true){
      console.log(isAdm)
    window.location.href = "food.html";
      
    }else{
        alert("Wrong Login!")
        return;
    }
})
.catch(function (error) {
  console.log("Error: " + error);
});

});  
