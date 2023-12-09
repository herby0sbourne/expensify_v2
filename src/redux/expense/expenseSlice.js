import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createExpense,
  removeExpense,
  updateExpense,
} from "../../firebase/firebase.js";
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
  }
);

const startGetExpenses = createAsyncThunk(
  "expense/startGetExpenses",
  async (_, { getState, dispatch }) => {
    const uid = getState().user?.uid;

    try {
      const expenses = await getExpenses(uid);
      dispatch(setExpenses(expenses));
    } catch (e) {
      console.error("Error getting expenses", e);
      throw e;
    }
  }
);

const startEditExpense = createAsyncThunk(
  "expense/startEditExpense",
  async (expenseData, { getState, dispatch }) => {
    const uid = getState().user?.uid;

    try {
      await updateExpense(uid, expenseData);
      dispatch(editExpense(expenseData));
    } catch (e) {
      console.error("Error updating expense", e);
      throw e;
    }
  }
);

const startRemoveExpense = createAsyncThunk(
  "expense/startRemoveExpense",
  async (id, { getState, dispatch }) => {
    const uid = getState().user?.uid;

    try {
      await removeExpense(uid, id);
      dispatch(deleteExpense(id));
    } catch (e) {
      console.error("Error deleting expense", e);
      throw e;
    }
  }
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
    deleteExpense: (state, action) => {
      const id = action.payload;

      return state.filter((expense) => expense.id !== id);
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

const { addExpense, setExpenses, editExpense, deleteExpense } =
  expensesSlice.actions;

const expenseReducer = expensesSlice.reducer;
const selectExpenses = (state) => state.expenses;

export {
  startAddExpense,
  startGetExpenses,
  startEditExpense,
  startRemoveExpense,
  selectExpenses,
  expenseReducer as default,
};
