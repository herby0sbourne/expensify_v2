import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  update,
  get,
  child,
  remove,
} from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getDatabase(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signInInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
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

  return expenKey;
};

export const getExpenses = async (uid) => {
  const expenseRef = ref(DB);
  const snapShot = await get(child(expenseRef, `users/${uid}/expenses`));

  if (!snapShot.exists()) {
    return [];
  }

  const transformedArray = Object.entries(snapShot.val()).map(
    ([id, expense]) => {
      return {
        id,
        desc: expense.desc,
        amount: Number(expense.amount),
        createdAt: Number(expense.createdAt),
        note: expense.note,
      };
    },
  );

  return transformedArray;
};

export const updateExpense = async (uid, updateExpense) => {
  const { id } = updateExpense;
  const expenseRef = ref(DB, `users/${uid}/expenses/${id}`);

  return await update(expenseRef, updateExpense);
};

export const removeExpense = async (uid, id) => {
  const expenseRef = ref(DB, `users/${uid}/expenses/${id}`);

  return await remove(expenseRef);
};
