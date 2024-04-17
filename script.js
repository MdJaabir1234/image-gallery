let loginInput=document.getElementById("login-input");
let container=document.querySelector(".container");
let loginCont=document.querySelector(".login-cont");
let imagePaths=["src/trimvid.mp4","src/16april2.jpg","src/16april1.jpg","src/img1.png","src/img2.png","src/img3.png"]

function fetchImages(){
    container.innerHTML=imagePaths.map(path=>{
        if(path.endsWith(".mp4")){
            return `<div class="img-holder"><video controls source="${path}"></video></div>`;
        }else{
            return `<div class="img-holder"><img src="${path}" alt="Image"></div>`;
        }
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
