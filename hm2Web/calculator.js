function  convertNumber(numberInserted,baseSelected){
    document.getElementById("result").innerHTML = "" ;
    var element = document.getElementById("myprogressBar");    
    var width = 1; 
    var identity = setInterval(scene, 5); 
    function scene() { 
      if (width >= 100) { 
        clearInterval(identity); 
      } else { 
        width++;  
        element.style.width = width + '%';  
      } 
    } 
    document.getElementById('Progress_Status').hidden = false;
    if(numberInserted.trim().match('[^0-9]') || numberInserted==""){
        document.getElementById("myprogressBar").style.backgroundColor = "red";
        setTimeout(() => {
            alert("Your Input Must Contains Only Digits\n")
            document.getElementById("myprogressBar").style.backgroundColor = "lightskyblue";
            document.getElementById('Progress_Status').hidden = true;
        }, 500); 
        return;
    }
    setTimeout(() => {
            var num = parseInt(numberInserted,10);
        document.getElementById("result").innerHTML = "The result is : "+num.toString(baseSelected)+"\n";
        document.getElementById('Progress_Status').hidden = true;
        }, 500);
  } 

  function reset(){
    document.getElementById("result").innerHTML = "" ;
    document.getElementById("num_inp").value ="";
    document.getElementById("selcted_base").value ="10";
  }