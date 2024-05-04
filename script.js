let loginInput=document.getElementById("login-input");
let container=document.querySelector(".container");
let loginCont=document.querySelector(".login-cont");
let imagePaths=["src/seven.jpg","src/six.jpg","src/five.jpg","src/four.jpg","src/three.jpg","src/two.jpg","src/trim-vid.mp4","src/16april2.jpg","src/16april1.jpg","src/img1.png","src/img2.png","src/4may6.png,"src/4may5.png,"src/4may4.png,"src/4may3.png,"src/4may2.png,"src/4may1.png","src/img3.png"]

function fetchImages(){
    container.innerHTML=imagePaths.map(path=>{
        if(path.endsWith(".mp4")){
            return `<video controls>
                      <source src="${path}" type="video/mp4">
                    </video>`;
        }else{
            return `<div class="img-holder"><img src="${path}"></div>`;
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
