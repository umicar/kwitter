var firebaseConfig = {
    apiKey: "AIzaSyBUesqzgy7czurp_W5BB4QB-bHJZ2g6J40",
    authDomain: "kwitter-b6178.firebaseapp.com",
    databaseURL: "https://kwitter-b6178-default-rtdb.firebaseio.com",
    projectId: "kwitter-b6178",
    storageBucket: "kwitter-b6178.appspot.com",
    messagingSenderId: "365656580986",
    appId: "1:365656580986:web:e22d9a522f0a98880d2cc3",
    measurementId: "G-5WBQFNH5RX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database(). ref("/").child(user_name).update({
        purpose: "adding user_name"
    });
}