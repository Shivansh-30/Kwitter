const firebaseConfig = {
      apiKey: "AIzaSyAqjmCNprZKxMaDBWDRHdu7-R3ShyPlr8w",
      authDomain: "kwitter-4be0c.firebaseapp.com",
      databaseURL: "https://kwitter-4be0c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4be0c",
      storageBucket: "kwitter-4be0c.appspot.com",
      messagingSenderId: "278064201085",
      appId: "1:278064201085:web:f8b07f3e0f5feafc34a014",
      measurementId: "G-VRK2T4JL4H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names );
row = "<div class= 'room_name' id="+ Room_names+"onclick ='redirectToRoomName(this . id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}