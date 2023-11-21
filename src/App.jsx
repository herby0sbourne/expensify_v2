import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { login } from "./redux/user/userSlice.js";
import { onAuthStateChangedListener } from "./firebase/firebase.js";

import LoginPage from "./pages/loginPage/LoginPage.jsx";
import AddExpensePage from "./pages/addExpensePage/AddExpensePage.jsx";
import EditExpensePage from "./pages/editExpensePage/EditExpensePage.jsx";
import ExpenseDashboardPage from "./pages/expenseDashboardPage/ExpenseDashboardPage";

import Layout from "./components/Layout.jsx";
import PublicRoute from "./components/protectedRoute/PublicRoute.jsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const un = onAuthStateChangedListener((user) => {
      if (user) {
        // console.log(user);
      }
      dispatch(login(user));
    });

    return un;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/*  Required Auth/Login User*/}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<ExpenseDashboardPage />} />
          <Route path="/create" element={<AddExpensePage />} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
