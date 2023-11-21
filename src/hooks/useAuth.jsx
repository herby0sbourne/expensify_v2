import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice.js";
import { onAuthStateChangedListener } from "../firebase/firebase.js";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // console.log(user);
      }
      dispatch(login(user));
    });

    return unsubscribe;
  }, [dispatch]);
};
