import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOD8k3by2_aUfL8MEAb8f4oJmYyCbyv_E",
  authDomain: "anna-a2387.firebaseapp.com",
  projectId: "anna-a2387",
  storageBucket: "anna-a2387.appspot.com",
  messagingSenderId: "250448187909",
  appId: "1:250448187909:web:bd9c0af984bfc08552826c",
  measurementId: "G-LY9YG7MNVV"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const storage= firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{storage,db,firebaseApp,provider, firebase as default};