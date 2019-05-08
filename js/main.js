var user;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB3ifc81e85v0YXEFIkSBacj8ZsItQY5pQ",
  authDomain: "inf655-finalproject.firebaseapp.com",
  databaseURL: "https://inf655-finalproject.firebaseio.com",
  projectId: "inf655-finalproject",
  storageBucket: "inf655-finalproject.appspot.com",
  messagingSenderId: "972139049179",
};
firebase.initializeApp(config);
var auth=firebase.auth();

  $(document).on('click','#signout',function(event){
  event.preventDefault();

  var promise = auth.signOut();
  promise.catch(e=>console.log(e.message));
  });

  auth.onAuthStateChanged(firebaseUser=>{
  if(firebaseUser) {
    document.getElementsByClassName("article").contentEditable = "true";
    document.getElementById("signout").style.display = "block";
    console.log(firebaseUser);
    user=firebaseUser;
  } else{
    document.getElementsByClassName("article").contentEditable = "false";
    document.getElementById("signout").style.display = "none";
    user=null;
    console.log('not logged in');
  }
  });

  var db=firebase.firestore();

  $(document).ready(function(event) {
  db.collection("fl_content").doc().find({
    title: $(this).set('h2[name=title]').val(),
    author: $(this).set('h5[name=author]').val(),
    date: $(this).set('h7[name=date]').val(),
    content: $(this).set('div[name=content]').val()
  })
  .then(function() {
    console.log("Article successfully loaded!");
  })
  .catch(function(error) {
    console.error("Error loading document: ", error);
  });
  });
