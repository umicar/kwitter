function adduser(){
    user_name=document.getElementById("input").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}