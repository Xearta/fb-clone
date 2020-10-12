import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjDN3niN5PJkQJ-KAX_UPKDYMQwUx_c9E',
  authDomain: 'fb-clone-f6346.firebaseapp.com',
  databaseURL: 'https://fb-clone-f6346.firebaseio.com',
  projectId: 'fb-clone-f6346',
  storageBucket: 'fb-clone-f6346.appspot.com',
  messagingSenderId: '201143195179',
  appId: '1:201143195179:web:579637713e9f4054e83c6e',
  measurementId: 'G-4290W0580C',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
