import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

  import { getAuth,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'

  import { getDatabase,get,ref,child } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js'

  const firebaseConfig = {

    apiKey: "AIzaSyBEjo4Z32eoJTVhWFl2VEP5_vx-WWa-Ml8",

    authDomain: "random-29190.firebaseapp.com",

    projectId: "random-29190",

    storageBucket: "random-29190.appspot.com",

    messagingSenderId: "94275377535",

    appId: "1:94275377535:web:81014e1d1684ac13abe24a",

    measurementId: "G-QDCNNJGM52",

    realTimeDatabase:"https://random-29190-default-rtdb.firebaseio.com/"

  };



  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  const db=getDatabase();

  const dbref=ref(db);

  const auth=getAuth(app);

  const email="noreplyaaaaaa@gmail.com";

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

    let inputPwd=loginInput.value;

    signInWithEmailAndPassword(auth,email,inputPwd).then((credentials)=>{

        loginCont.classList.add("hide");

        container.classList.remove("hide");

        fetchImages();

      }).catch((err)=>{

        console.log(err);

        alert("Wrong password");

      });

}



loginCont.addEventListener("submit",login);

      
