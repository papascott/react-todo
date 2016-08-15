import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB4ZCsezYvmozS2nG9gVRJ3Za8gRWvmnXg",
  authDomain: "hanson-todo-app.firebaseapp.com",
  databaseURL: "https://hanson-todo-app.firebaseio.com",
  storageBucket: "hanson-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.3'
  },
  isRunning: true,
  user: {
    name: 'Scott',
    age: 54
  }
});


// created todos
// on added
// push 2 todos
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog!'
});

todosRef.push({
  text: 'Feed the cat!'
});


//var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);
