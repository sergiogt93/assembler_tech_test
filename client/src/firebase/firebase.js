// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_SOTRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const auth = getAuth(app);

export const signupWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signinWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signoutFirebase = () => signOut(auth);

export const uploadImage = async (file) => {
  const fileName = ref(storage, file.name);
  await uploadBytes(fileName, file);
  var url = await getDownloadURL(fileName);
  return url;
};
