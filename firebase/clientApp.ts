import { initializeApp } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOwfzOa6cgkhudDUVZtvZCaRboaiDC8B8",
    authDomain: "onepiece-55ef4.firebaseapp.com",
    projectId: "onepiece-55ef4",
    storageBucket: "onepiece-55ef4.appspot.com",
    messagingSenderId: "618111434089",
    appId: "1:618111434089:web:4850e314a86575551e91f8",
    measurementId: "G-X0Z121R87C"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);