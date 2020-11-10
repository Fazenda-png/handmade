import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBtR_Rbj124sNKvMfzSPl4XPokcaNyh9YU",
    authDomain: "handmade-1efde.firebaseapp.com",
    databaseURL: "https://handmade-1efde.firebaseio.com",
    projectId: "handmade-1efde",
    storageBucket: "handmade-1efde.appspot.com",
    messagingSenderId: "450588259828",
    appId: "1:450588259828:web:af2ff439d029abb0a835a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default firebase