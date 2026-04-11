let search = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let profile = document.querySelector(".profile");
let toggle = document.querySelector("#toggle")
let body = document.querySelector("body")

function getuser(username){
    return fetch(`https://api.github.com/users/${username}`).then(raw=>{
        if(!raw.ok) throw new Error("user not found");
        return raw.json();
    })
}

/*function getrepos(username){
     return fetch(`https://api.github.com/users/${username}/repos`).then(raw=>{
        if(!raw.ok) throw new Error("user not found");
        return raw.json();
     })
    }*/


function profiledata(details){
    console.log(details);
    
    let data = `
        <img src="${details.avatar_url}" alt="avatar">
        
        <div class="info">
          <h2>${details.name}</h2>
          <p>${details.bio ? details.bio : ""}</p>

          <div class="stats">
            <div>
              <h3>Repos</h3>
              <span>${details.public_repos}</span>
            </div>
            <div>
              <h3>Followers</h3>
              <span>${details.followers}</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>${details.following}</span>
            </div>
          </div>

          <a href="${details.html_url}" target="_blank">View Profile</a>
        </div>`

      profile.innerHTML= data;
    
}


search.addEventListener("click",function(){
   let username =  usernameinp.value.trim();
   if(username.length>0){
        getuser(username).then(function(data){
            profiledata(data);
        })
   }
   else{
    alert("input section is empty...!!");
   }
});

toggle.addEventListener("click",function(){
    this.classList.toggle("ri-moon-fill");
    if( this.classList.toggle("ri-sun-fill")){
        body.style.background="#243b55";
        toggle.style.color="white";
        body.style.transition="3s";
    }else{
        body.style.background="black";
        toggle.style.color="white";
        body.style.transition="2s";   
    }
})
