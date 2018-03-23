const functions = require('firebase-functions');
const admin = require('firebase-admin')
//admin.initializeApp(functions.config().firebase);
const firebase = require('firebase')

var config = {
  apiKey: "AIzaSyCGPxjXIRTCD9eEXIB1tJ0n_DgfnqSkvhY",
  authDomain: "test-traffic-6dd98.firebaseapp.com",
  databaseURL: "https://test-traffic-6dd98.firebaseio.com",
  projectId: "test-traffic-6dd98",
  storageBucket: "test-traffic-6dd98.appspot.com",
  messagingSenderId: "422193138129"
};
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

exports.traffic = functions.https.onRequest((request, response) => {
    return db.ref('traffic').once('value').then(function(snapshot) {
      var data = snapshot.val();
      response.send(data)
    });
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
