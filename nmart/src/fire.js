import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSUMm3J3sKgMEelIO4Tco19_FqVaaiSNM",
  authDomain: "login-4ade3.firebaseapp.com",
  projectId: "login-4ade3",
  storageBucket: "login-4ade3.appspot.com",
  messagingSenderId: "200416284718",
  appId: "1:200416284718:web:ed1bdfa95a3f86c77e4fbf",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
