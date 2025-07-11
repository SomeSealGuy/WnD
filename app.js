import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_LEqCK2MroKJ8ehFIQtmXGJFKk6bkM6c",
    authDomain: "wnd-seal.firebaseapp.com",
    projectId: "wnd-seal",
    storageBucket: "wnd-seal.appspot.com",
    messagingSenderId: "52230582509",
    appId: "1:52230582509:web:b2f5855d52febba87adce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in function
document.getElementById('signInBtn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Sign out function
document.getElementById('signOutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error(error);
    });
});

// Listen to authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('whenSignedIn').hidden = false;
        document.getElementById('whenSignedOut').hidden = true;
        document.getElementById('userDetails').textContent = `Hello, ${user.displayName}. Your UID is: ${user.uid}`;
    } else {
        document.getElementById('whenSignedIn').hidden = true;
        document.getElementById('whenSignedOut').hidden = false;
    }
})