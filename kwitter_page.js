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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        nametage = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
                        messagetage = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-waring' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
                        spantage = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = nametage + messagetage + like_button + spantage;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}
getData();
function updateLike(message_id) {
      console.log("clicked on like button" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({ like: update_likes });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("msg").value = "";
}