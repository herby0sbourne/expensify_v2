import { onAuthStateChangedListener } from "../firebase/firebase";
import { startGetExpenses } from "./expense/expenseSlice";
import { login } from "./user/userSlice";

export const ListeningToAuthChanges = () => (dispatch) => {
  return onAuthStateChangedListener((user) => {
    if (user) {
      dispatch(login(user));
      dispatch(startGetExpenses());
    } else {
      dispatch(login(user));
    }
  });
};
