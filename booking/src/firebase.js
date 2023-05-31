// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCjLi1t7H4UrJlALMI9TvKUGbTo7iBnr-Y",
    authDomain: "coworking9-76fbd.firebaseapp.com",
    projectId: "coworking9-76fbd",
    storageBucket: "coworking9-76fbd.appspot.com",
    messagingSenderId: "222277885542",
    appId: "1:222277885542:web:4f896d4de918aeabd2d7a7",
    measurementId: "G-HEX6C8TYV8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) //3:20:50
  //https://www.youtube.com/watch?v=TG2wb19qO5M

  const auth=firebase.auth();

  export {auth}
