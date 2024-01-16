// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken } from 'firebase/messaging';



// const firebaseConfig = {
//   apiKey: "AIzaSyBjeX_YhRqoOmvSMzi38auEQtZKmPjDkts",
//   authDomain: "keptx-53780.firebaseapp.com",
//   projectId: "keptx-53780",
//   storageBucket: "keptx-53780.appspot.com",
//   messagingSenderId: "36087120000",
//   appId: "1:36087120000:web:8dd1b7eaf7ccc7b6a22665",
//   measurementId: "G-R6DXYW0985"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export const requestFirebaseToken = async () => {
//   try {
//     const currentToken = await getToken(messaging);
//     console.log('FCM Token:', currentToken);
//     return currentToken;
//   } catch (error) {
//     console.error('Error getting FCM token:', error);
//     return null;
//   }
// };



// firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBjeX_YhRqoOmvSMzi38auEQtZKmPjDkts",
  authDomain: "keptx-53780.firebaseapp.com",
  projectId: "keptx-53780",
  storageBucket: "keptx-53780.appspot.com",
  messagingSenderId: "36087120000",
  appId: "1:36087120000:web:8dd1b7eaf7ccc7b6a22665",
  measurementId: "G-R6DXYW0985"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };