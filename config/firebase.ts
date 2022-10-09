import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDERID,
//   appId: process.env.FIREBASE_APPID,
//   measurementId: process.env.FIREBASE_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAU51HwUO3dM6g2cVtURNwPX2_hlQ_w4JY",
  authDomain: "coding-test-72fa5.firebaseapp.com",
  projectId: "coding-test-72fa5",
  storageBucket: "coding-test-72fa5.appspot.com",
  messagingSenderId: "155227620151",
  appId: "1:155227620151:web:f3f15c046d232477c110b2",
  measurementId: "G-49XW5E9YQV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
