let btn = document.querySelector("button")
let input = document.querySelector("#input")
let listContainer = document.querySelector("#listContainer")
let body = document.querySelector("body");

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



function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show()

