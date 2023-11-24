import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createExpense, updateExpense } from "../../firebase/firebase.js";
import { getExpenses } from "../../firebase/firebase";

const startAddExpense = createAsyncThunk(
  "expense/startAddExpense",
  async (expenseData, { getState, dispatch }) => {
    const uid = getState().user?.uid;
    const { desc = "", note = "", amount = 0, createdAt = 0 } = expenseData;

    const expense = { desc, note, amount, createdAt };

    try {
      const id = await createExpense(uid, expense);
      dispatch(addExpense({ id, ...expense }));
    } catch (e) {
      console.error("Error adding expense:", e);
      throw e;
    }
  },
);

const startGetExpenses = createAsyncThunk(
  "expense/startGetExpenses",
  async (_, { getState, dispatch }) => {
    const uid = getState().user?.uid;

    const expenses = await getExpenses(uid);
    dispatch(setExpenses(expenses));
  },
);

const startEditExpense = createAsyncThunk(
  "expense/startEditExpense",
  async (expenseData, { getState, dispatch }) => {
    const uid = getState().user?.uid;

    await updateExpense(uid, expenseData);
    dispatch(editExpense(expenseData));
  },
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    setExpenses: (state, action) => {
      state.push(...action.payload);
    },
    editExpense: (state, action) => {
      const { id, ...updates } = action.payload;
      return state.map((expense) => {
        if (expense.id === id) {
          return {
            ...expense,
            ...updates,
          };
        } else {
          return expense;
        }
      });
    },
  },
});

const { addExpense, setExpenses, editExpense } = expensesSlice.actions;

const expenseReducer = expensesSlice.reducer;
const selectExpenses = (state) => state.expenses;

export {
  startAddExpense,
  addExpense,
  startGetExpenses,
  startEditExpense,
  editExpense,
  selectExpenses,
  expenseReducer as default,
};
