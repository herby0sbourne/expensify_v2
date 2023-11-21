import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, update } from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDsD8LBeRuNgVncDBFRUESqe28yT6Ihrqg",
  authDomain: "test-database-906a1.firebaseapp.com",
  databaseURL: "https://test-database-906a1-default-rtdb.firebaseio.com",
  projectId: "test-database-906a1",
  storageBucket: "test-database-906a1.appspot.com",
  messagingSenderId: "114974596717",
  appId: "1:114974596717:web:764180bb5b93434b32a964",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getDatabase(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signInInWithGoogle = async () => {
  const user = await signInWithPopup(auth, provider);
  console.log(user);
};

export const LogOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createExpense = async (uid, expenseData) => {
  const expenseRef = ref(DB, `users/${uid}/expenses`);
  const newExpenseRef = push(expenseRef);

  const expenKey = newExpenseRef.key;
  await update(newExpenseRef, expenseData);

  console.log({ expenKey });
  return expenKey;
};
