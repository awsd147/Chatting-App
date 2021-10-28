/** @format */

import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXEaz86zsUaaM5Zl1DtfhKSAHDfKRRiA",
  authDomain: "chat-group-ecdcc.firebaseapp.com",
  projectId: "chat-group-ecdcc",
  storageBucket: "chat-group-ecdcc.appspot.com",
  messagingSenderId: "363642598537",
  appId: "1:363642598537:web:f2ba98e84a1c30ed6ac258",
  measurementId: "G-BN30L77W1F",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
