import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB4ZCsezYvmozS2nG9gVRJ3Za8gRWvmnXg",
    authDomain: "hanson-todo-app.firebaseapp.com",
    databaseURL: "https://hanson-todo-app.firebaseio.com",
    storageBucket: "hanson-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
