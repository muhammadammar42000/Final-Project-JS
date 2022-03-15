
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGIg0PZIHx1V8-ddX-QJPkubgY7KKzpW8",
    authDomain: "final-js-project-cf4f6.firebaseapp.com",
    projectId: "final-js-project-cf4f6",
    storageBucket: "final-js-project-cf4f6.appspot.com",
    messagingSenderId: "575556478784",
    appId: "1:575556478784:web:7fcd3667a5976c62a87ca5"
};


var connectFirebase = (auth = false, firestore = false, storage = false) => {
    let script = document.createElement('script');
    script.src = "https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js";
    script.id = "firebase-source-script";
    document.body.prepend(script);
    //for auth integration
    if (auth) {
        let script = document.createElement('script');
        script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js";
        document.body.prepend(script);
    }
    //for firstore integration
    if (firestore) {
        let script = document.createElement('script');
        script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js";
        document.body.prepend(script);
    }
    //for storage integration
    if (storage) {
        let script = document.createElement('script');
        script.src = "https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js";
        document.body.prepend(script);
    }

    document.getElementById('firebase-source-script').addEventListener('load', () => {
        firebase.initializeApp(firebaseConfig);
    });
}