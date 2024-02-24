let loginInput=document.getElementById("login-input");
let container=document.querySelector(".container");
let loginCont=document.querySelector(".login-cont");
let imagePaths=["src/image1.webp","src/image2.png","src/image3.webp","src/image4.jpg","src/image5.png","src/image6.png","src/image7.jpg"]

function fetchImages(){
    container.innerHTML=imagePaths.map(path=>{
        return `<div class="img-holder"><img src="${path}" alt="Image"></div>`;
    }).join("");
}

function login(event){
    event.preventDefault();
    if(loginInput.value==="mushfiqmessiprogramming"){
        loginCont.classList.add("hide");
        container.classList.remove("hide");
        fetchImages();
    }else{
        alert("Wrong password");
    }
}

loginCont.addEventListener("submit",login);