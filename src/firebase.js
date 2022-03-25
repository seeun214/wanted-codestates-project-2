import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXACnY232iWM_6J8vlvnOVM3sd9Snjsrc',
  authDomain: 'wanted-codestates-project-9.firebaseapp.com',
  projectId: 'wanted-codestates-project-9',
  storageBucket: 'wanted-codestates-project-9.appspot.com',
  messagingSenderId: '14187185665',
  appId: '1:14187185665:web:d894ecf9fc197304f66200',
  measurementId: 'G-960V3Q3XTN',
};

// export default firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
