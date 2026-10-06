import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getFirestore,
doc,
setDoc,
getDoc,
getDocs,
onSnapshot,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyC3xX4DhYqOKEw_Sh372M7sZgulBNCjD14",

authDomain: "serenity-farms.firebaseapp.com",

projectId: "serenity-farms",

storageBucket: "serenity-farms.firebasestorage.app",

messagingSenderId: "365731818542",

appId: "1:365731818542:web:ebca76ff3fe6dbd2ff83bf"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.firestoreDoc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.onSnapshot = onSnapshot;
window.firebaseDB = db;
export {
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    onSnapshot,
    collection,
    addDoc
};

console.log("Firebase Connected");

