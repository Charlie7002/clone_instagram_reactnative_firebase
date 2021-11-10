// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB8teJe1jgKaFdbb_5pVTLEo1OJK19gsSo',
	authDomain: 'instaclone-reactnative.firebaseapp.com',
	projectId: 'instaclone-reactnative',
	storageBucket: 'instaclone-reactnative.appspot.com',
	messagingSenderId: '46736931854',
	appId: '1:46736931854:web:8642fba00ce728d887105f',
};

// Initialize Firebase width perso hack

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
