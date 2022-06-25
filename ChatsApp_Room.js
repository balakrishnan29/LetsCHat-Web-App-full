const firebaseConfig = {
    apiKey: "AIzaSyB6TwumwaoTjsosXMB8lWPeZLHnrXYKmNs",
    authDomain: "chatsapp-e6b39.firebaseapp.com",
    databaseURL: "https://chatsapp-e6b39-default-rtdb.firebaseio.com",
    projectId: "chatsapp-e6b39",
    storageBucket: "chatsapp-e6b39.appspot.com",
    messagingSenderId: "928471500697",
    appId: "1:928471500697:web:b874649db632a7459b3508"
  };
  


  var user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding Room Name"
        })
        localStorage.setItem("room_name", room_name);
        window.location="ChatsApp_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
                     

    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log("name")
    localStorage.setItem("room_name", name);
    window.location="ChatsApp_page.html"
}

function logut(){
    window.location="ChatsApp.html"
}
