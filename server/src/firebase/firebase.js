// Import the functions you need from the SDKs you need
const firebase = require("firebase-admin");
const CONFIG = require("../config/config");

firebase.initializeApp({
  credential: firebase.credential.cert(CONFIG.firebase),
});

const auth = firebase.auth();

module.exports = {
  authFirebase: auth,
};
