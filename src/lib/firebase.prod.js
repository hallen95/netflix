import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed';
//config 
const config = {
    apiKey: "AIzaSyDqfResAUzobS45tvED0DH7KadvR-Gwu2A",
    authDomain: "netflix-affae.firebaseapp.com",
    projectId: "netflix-affae",
    storageBucket: "netflix-affae.appspot.com",
    messagingSenderId: "29791786466",
    appId: "1:29791786466:web:acf02c153aa425a2cf95bb"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };