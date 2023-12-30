import firebase from 'firebase';

  var firebaseConfig = {
  apiKey: "AIzaSyD94Oif6ZiQA3VybA9KU7cyb1BY6EtE3_c",
  authDomain: "pro-c58-a4a80.firebaseapp.com",
  databaseURL: "https://pro-c58-a4a80-default-rtdb.firebaseio.com",
  projectId: "pro-c58-a4a80",
  storageBucket: "pro-c58-a4a80.appspot.com",
  messagingSenderId: "139718288957",
  appId: "1:139718288957:web:a2a28e5bdd3a5de5726c54"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();