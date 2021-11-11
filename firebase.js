// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
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

// Initialize Firebase

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
