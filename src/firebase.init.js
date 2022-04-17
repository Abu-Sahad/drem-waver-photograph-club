// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPf7eLQPC_nazkIbitqNQodaJ9lZMrXAg",
    authDomain: "dream-waver-photograph.firebaseapp.com",
    projectId: "dream-waver-photograph",
    storageBucket: "dream-waver-photograph.appspot.com",
    messagingSenderId: "446580541610",
    appId: "1:446580541610:web:e4e60fd70a5e9be28be8d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;