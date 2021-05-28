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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}