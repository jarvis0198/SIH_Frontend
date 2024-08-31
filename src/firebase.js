import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAjHeelDSDGbxetwEAXpxefYS0Sqx-46ss",
    authDomain: "class-skill-training.firebaseapp.com",
    projectId: "class-skill-training",
    storageBucket: "class-skill-training.appspot.com",
    messagingSenderId: "203236086496",
    appId: "1:203236086496:web:b9d2608966a2260a72f685",
    measurementId: "G-KV0LHFXEM8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
