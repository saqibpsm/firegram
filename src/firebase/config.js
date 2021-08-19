import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCm0Snlc94-JdtCSJ6baUvJ0R7q5dQK1qg',
  authDomain: 'firegram-3f818.firebaseapp.com',
  projectId: 'firegram-3f818',
  storageBucket: 'firegram-3f818.appspot.com',
  messagingSenderId: '984257044112',
  appId: '1:984257044112:web:300e704bffe49e3fb20215',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
