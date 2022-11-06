// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_dqiHhCF5BwuzXK-712z4VXCoNDd3-k",
  authDomain: "netflix-clone-rs-15a87.firebaseapp.com",
  projectId: "netflix-clone-rs-15a87",
  storageBucket: "netflix-clone-rs-15a87.appspot.com",
  messagingSenderId: "962067620448",
  appId: "1:962067620448:web:1d6a206cb8181ccd2dd905"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }