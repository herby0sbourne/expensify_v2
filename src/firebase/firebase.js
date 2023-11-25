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

  const transformedArray = Object.entries(snapShot.val()).map(
    ([id, expense]) => {
      return {
        id,
        desc: expense.desc,
        amount: Number(expense.amount),
        createdAt: Number(expense.createdAt),
        note: expense.note,
      };
    }
  );

  if (!snapShot.exists()) {
    return [];
  }

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
