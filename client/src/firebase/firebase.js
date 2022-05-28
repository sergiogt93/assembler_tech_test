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
console.log(process.env.REACT_APP_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "assemblertech-1d3a8.firebaseapp.com",
  projectId: "assemblertech-1d3a8",
  storageBucket: "assemblertech-1d3a8.appspot.com",
  messagingSenderId: "666952794961",
  appId: "1:666952794961:web:f12c63d5cb3a736efd8970",
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
