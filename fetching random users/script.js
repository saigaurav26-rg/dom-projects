let container = document.querySelector(".container");

function getuser(){
    container.innerHTML = "";
    fetch("https://randomuser.me/api/?results=10")
.then(raw => raw.json())
.then(function(data){
    data.results.forEach(function(user){
         // create elements
   // console.log(user.name.title);  
         
  const card = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const email = document.createElement("p");
  const button = document.createElement("button");

  // add classes
  card.classList.add("card");
  button.classList.add("active");

  // set values
  img.src = user.picture.large;
  name.innerText = user.name.first + " " + user.name.last;
  email.innerText = user.email;
  button.innerText = "Active";

  // append elements
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(email);
  card.appendChild(button);

  container.appendChild(card);
});
        
});
}

getuser();

let refresh = document.querySelector(".refresh-btn");

refresh.addEventListener("click",function(){
    getuser();
})