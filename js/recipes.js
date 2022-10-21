
  var elements = document.getElementsByTagName('h2');
  var array = [];

function getInputValue() {  
    let value = document.getElementById("searchTxt").value;
   
    for (let i = 0 ; i < elements.length; i++) {
       if(elements[i].innerHTML.includes(value.toUpperCase())){
         array.push(elements[i].innerHTML);
       }
      }
      
      if(array.length == 0) {
        alert('We are sorry but there are no matches for your search.');
       } 
       else{
        alert("The searched word can be found in " + array);
       }
  }