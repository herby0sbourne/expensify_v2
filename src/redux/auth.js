import { login } from "./user/userSlice";
import { startGetExpenses } from "./expense/expenseSlice";
import { onAuthStateChangedListener } from "../firebase/firebase";
import { clearLoading, setLoading } from "./loading/loadingSlice";

// export const ListeningToAuthChanges = () => (dispatch) => {
//   dispatch(setLoading());
//   return onAuthStateChangedListener((user) => {
//     dispatch(clearLoading());
//     if (user) {
//       dispatch(login(user));
//       dispatch(startGetExpenses());
//     } else {
//       dispatch(login(user));
//     }
//   });
// };

export const ListeningToAuthChanges = () => (dispatch) => {
  dispatch(setLoading());
  return onAuthStateChangedListener((user) => {
    if (!user) {
      dispatch(login(user));
      dispatch(clearLoading());
      return;
    }

    dispatch(login(user));
    dispatch(startGetExpenses());

    dispatch(clearLoading());
  });
};
