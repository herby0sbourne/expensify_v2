import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createExpense } from "../../firebase/firebase.js";

const startAddExpense = createAsyncThunk(
  "expense/startAddExpense",
  async (expenseData, { getState, dispatch }) => {
    const uid = getState()?.user.uid;
    const { desc = "", note = "", amount = 0, createdAt = 0 } = expenseData;

    const expense = { description: desc, note, amount, createdAt };

    try {
      const id = await createExpense(uid, expense);
      dispatch(addExpense({ id, ...expense }));
    } catch (e) {
      console.error("Error adding expense:", e);
      throw e;
    }
  },
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { addExpense } = expensesSlice.actions;

const expenseReducer = expensesSlice.reducer;

export { startAddExpense, addExpense, expenseReducer as default };
