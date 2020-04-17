import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDRTVlSFR8-kYSLPfYkzrSp8URHJgQvRpQ",
    authDomain: "voila-chat.firebaseapp.com",
    databaseURL: "https://voila-chat.firebaseio.com",
    projectId: "voila-chat",
    storageBucket: "voila-chat.appspot.com",
    messagingSenderId: "827862146131",
    appId: "1:827862146131:web:b8f85bd308bde101c7baa6",
    measurementId: "G-98H6J41N27"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  export default firebaseApp.firestore()