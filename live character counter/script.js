let text = document.querySelector("#text");
let count = document.querySelector("#count")
let toggle = document.querySelector("#toggle")
let body = document.querySelector("body");
let con = document.querySelector("#container");


text.addEventListener("input",function(){
    let length = text.value.length;
    count.innerHTML = length;

    if(length>=80){
    count.style.color="red";
  } else if(length>=50){
     count.style.color="blue";
} else{
    count.style.color="green";
}

});

toggle.addEventListener("click",function(){
    this.classList.toggle("ri-moon-fill");
    if( this.classList.toggle("ri-sun-fill")){
        body.style.background=" rgb(122, 227, 227)";
        toggle.style.color="black";
        body.style.transition="2s";
    }else{
        body.style.background="black";
        toggle.style.color="white";
        body.style.transition="2s";
      
        
    }
})

