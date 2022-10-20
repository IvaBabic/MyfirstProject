
var elements = document.getElementsByTagName('h2');

function getInputValue() {  
    let value = document.getElementById("searchTxt").value;
   
    for (let i = 0 ; i < elements.length; i++) {
       if(elements[i].innerHTML.includes(value.toUpperCase())){
       alert("The searched word can be found in " + elements[i].innerHTML);
        }    
} 
  }


  
  

