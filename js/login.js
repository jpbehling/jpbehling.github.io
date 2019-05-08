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

  $(document).on('submit','#form-signin',function(event){
  event.preventDefault();

  var promise = auth.signInWithEmailAndPassword($('#signin_email').val(),$('#signin_password').val());
  promise.catch(e=>{console.log(e.message);$('#alert-signin').text(e.message);
  ;alert("The Log In email and password combination is not correct.\n\nPlease try again.")} );
  });

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
