let btn = document.querySelector("button")
let input = document.querySelector("#input")
let listContainer = document.querySelector("#listContainer")
let main = document.querySelector("main");
let toggle = document.querySelector("#toggle")

btn.addEventListener("click",function(){
    if(input.value === ""){
        alert("Enter your task....")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= input.value;

        let span = document.createElement("span");
        span.innerHTML= "❌"
        li.appendChild(span)
        listContainer.appendChild(li)
         
    }
    input.value="";
     savedata();
   
})

listContainer.addEventListener("click",function(dets){
    if(dets.target.tagName==="LI"){
        dets.target.classList.toggle("checked")
         savedata();
    }
     else if (dets.target.tagName === "SPAN") {
    dets.target.parentElement.remove();
     savedata();
  }
});

toggle.addEventListener("click",function(){
    this.classList.toggle("ri-moon-fill");
    if( this.classList.toggle("ri-sun-fill")){
        main.style.background="cyan";
        toggle.style.color="black";
        main.style.transition="3s";
    }else{
        main.style.background="black";
        toggle.style.color="white";
        main.style.transition="2s";   
    }
})




function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show()

