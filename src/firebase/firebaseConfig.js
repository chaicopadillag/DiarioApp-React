import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
	apiKey: process.env.REACT_APP_KEY_APIKEY,
	authDomain: process.env.REACT_APP_KEY_AUTHDOMAIN,
	projectId: process.env.REACT_APP_KEY_PROJECTID,
	storageBucket: process.env.REACT_APP_KEY_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_KEY_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_KEY_APPID,
};
firebase.initializeApp(firebaseConfig);

const authFirebase = firebase.auth();
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { authFirebase, db, googleAuthProvider };
