// firebase-config.js
// Configuración compartida de Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_eIHjEUx9vPt_6FMmuTMEr9A2yNnv1RE",
    authDomain: "tibutec-website.firebaseapp.com",
    projectId: "tibutec-website",
    storageBucket: "tibutec-website.firebasestorage.app",
    messagingSenderId: "321326552697",
    appId: "1:321326552697:web:0b0e1b7203efeb7444a6a8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };
