import { createContext, useContext, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import {
  auth,
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
  signoutFirebase,
} from "../../firebase/firebase";
import { signupAPI } from "../../api/auth";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  const signup = async (email, password) => {
    try {
      const { user } = await signupWithEmailAndPassword(email, password);
      const { accessToken, uid } = user;
      const gift = { uid: uid, email: email };
      await signupAPI(accessToken, gift);
      setCurrentUser(user);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const signin = async (email, password) => {
    try {
      const res = await signinWithEmailAndPassword(email, password);
      setCurrentUser(res.user);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const signout = async () => await signoutFirebase();

  const value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
