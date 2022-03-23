
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGIg0PZIHx1V8-ddX-QJPkubgY7KKzpW8",
    authDomain: "final-js-project-cf4f6.firebaseapp.com",
    projectId: "final-js-project-cf4f6",
    storageBucket: "final-js-project-cf4f6.appspot.com",
    messagingSenderId: "575556478784",
    appId: "1:575556478784:web:7fcd3667a5976c62a87ca5"
};


var connectFirebase = async (auth = false, firestore = false, storage = false, func) => {

    await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js", "firebase-source-scr");

    if (auth) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js", "auth-firebase-scr");

    if (firestore) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js", "firestore-firebase-scr");

    if (storage) await addScriptInDOM("https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js", "storage-firebase-scr");

    firebase.initializeApp(firebaseConfig);
    
    if (func) func();
}

var addScriptInDOM = async (url, id) => {

    return new Promise((resolve, reject) => {

        let script = document.createElement('script');
        script.src = url;
        script.id = id;
        document.body.prepend(script);

        document.getElementById(id).addEventListener('load', () => {
            resolve();
            return;
        });
        setTimeout(reject, 10000);
    })
}