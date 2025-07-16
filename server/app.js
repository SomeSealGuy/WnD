import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore, setDoc, doc, getDoc, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_LEqCK2MroKJ8ehFIQtmXGJFKk6bkM6c",
    authDomain: "wnd-seal.firebaseapp.com",
    projectId: "wnd-seal",
    storageBucket: "wnd-seal.appspot.com",
    messagingSenderId: "52230582509",
    appId: "1:52230582509:web:b2f5855d52febba87adce4",
    // databaseURL: "sealland.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app, "sealland");


// console.log(getDoc(doc(db, "seals", 1)))


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



// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

document.getElementById('seehundspeichern').addEventListener('click', async() => {
    const foo = document.getElementById("usernamE").value
        console.log(foo)
// Add a new document in collection "cities"
    await setDoc(doc(collection(db, "seals"), "1"), {
        name: foo    })

    // console.log(getDoc(d)).then(console.log)
});



document.getElementById('robbenlesen').addEventListener('click', async() => {
    const docRef = doc(collection(db, "seals"), "1");
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}    
});


