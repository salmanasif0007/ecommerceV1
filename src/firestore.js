import * as firebase from 'firebase';
import 'firebase/firestore'
// var storage = firebase.storage();

var config = {

    apiKey: "AIzaSyDVoqXFjl6AylXtzMG2yl2x_HeZJvTht94",
    authDomain: "e-com-661e7.firebaseapp.com",
    databaseURL: "https://e-com-661e7.firebaseio.com",
    projectId: "e-com-661e7",
    storageBucket: "e-com-661e7.appspot.com",
    messagingSenderId: "973614595915",
    appId: "1:973614595915:web:1c7ed403d7b5af8e9672ce",
    measurementId: "G-X8LLKSPH8B"
  
};

firebase.initializeApp(config);

export default firebase;