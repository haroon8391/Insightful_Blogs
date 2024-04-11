import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "blog-app-1dafa.firebaseapp.com",
  projectId: "blog-app-1dafa",
  storageBucket: "blog-app-1dafa.appspot.com",
  messagingSenderId: "1030817021401",
  appId: "1:1030817021401:web:ae021d9fc2a0b7a3be2dc8",
};


export const app = initializeApp(firebaseConfig);
