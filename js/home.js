console.log("hello");

var listItem= document.getElementsByTagName("li");
console.log(listItem.length);

 for (let i = 0 ; i < listItem.length; i++) {
    listItem[i].addEventListener("click", ()=>{
        alert("Ideally, clicking on Archives would lead to another page generated with the help of php and some DB. It would select the recipes from a DB that correspond to the month in question. The Elsewhere page would lead to real websites.");
     })
  }








