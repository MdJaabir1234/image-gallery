let loginInput=document.getElementById("login-input");
let container=document.querySelector(".container");
let loginCont=document.querySelector(".login-cont");
let imagePaths=["src/seven.jpg","src/six.jpg","src/five.jpg","src/four.jpg","src/three.jpg","src/two.jpg","src/trim-vid.mp4","src/16april2.jpg","src/16april1.jpg","src/img1.png","src/img2.png","src/4may6.jpeg","src/4may5.jpeg","src/4may4.jpeg","src/4may3.jpeg","src/4may2.jpeg","src/4may1.jpeg","src/img3.png"]

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
    let hash=1000431022;
    let inputPwd=parseInt(loginInput.value);
    if(inputPwd.toString(6)!=inputPwd && inputPwd.toString(6)===hash){
        loginCont.classList.add("hide");
        container.classList.remove("hide");
        fetchImages();
    }else{
        alert("Wrong password");
    }
}

loginCont.addEventListener("submit",login);
