import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// const firebaseConfig = {
//     apiKey: "AIzaSyDpDAg1ZODmunHPvqPJqTCCp3mbRC3zH1s",
//     authDomain: "fir-54bbc.firebaseapp.com",
//     projectId: "fir-54bbc",
//     storageBucket: "fir-54bbc.appspot.com",
//     messagingSenderId: "765999141827",
//     appId: "1:765999141827:web:b6bd11a4f01f81b43d6376",
//     measurementId: "G-RS3TBMPGDE"
//   };
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXUYdyTYitpK_cdqLKBFPmk7GsPWux3lk",
  authDomain: "olx-clone-41c15.firebaseapp.com",
  projectId: "olx-clone-41c15",
  storageBucket: "olx-clone-41c15.appspot.com",
  messagingSenderId: "657473932102",
  appId: "1:657473932102:web:8a00c6888344bc10273347",
  measurementId: "G-FX1Y9T0P0Y"
};

export default firebase.initializeApp(firebaseConfig)