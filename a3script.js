function jumpAnchor(id){
                 
    location.href = "#" + id;                  
}
function theme1(){
    const x = document.getElementById("freebody");
    x.classList.remove("freebody3");
    x.classList.remove("freebody2");
    if(!x.classList.contains("freebody1")){
    x.classList.toggle("freebody1");}
    
}

function theme2(){
    const x = document.getElementById("freebody");
    x.classList.remove("freebody3");
    x.classList.remove("freebody1");
    x.classList.toggle("freebody2");
    
}
function theme3(){
    const x = document.getElementById("freebody");
    x.classList.toggle("freebody3");
    x.classList.remove("freebody1");
    x.classList.remove("freebody2");
    
}
function cstheme1(){
    const x = document.getElementById("csgobody");
    x.classList.remove("csgobody3");
    x.classList.remove("csgobody2");
    if(!x.classList.contains("csgobody1")){
    x.classList.toggle("csgobody1");}
    
}

function cstheme2(){
    const x = document.getElementById("csgobody");
    x.classList.remove("csgobody3");
    x.classList.remove("csgobody1");
    x.classList.toggle("csgobody2");
    
}
function cstheme3(){
    const x = document.getElementById("csgobody");
    x.classList.toggle("csgobody3");
    x.classList.remove("csgobody1");
    x.classList.remove("csgobody2");
    
}
function noti(){
    const x = document.getElementById("alert");
    alert("Thanks for the idea! be sure to be subscribed to my youtube channel to see my latest videos");
}

const e = document.getElementById("submit");

document.getElementById("submit").addEventListener("click", function() {
  document.getElementById("m").innerHTML = "Thanks for the Review!";
});