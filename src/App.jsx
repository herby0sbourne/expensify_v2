import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/loginPage/LoginPage.jsx";
import AddExpensePage from "./pages/addExpensePage/AddExpensePage.jsx";
import EditExpensePage from "./pages/editExpensePage/EditExpensePage.jsx";
import ExpenseDashboardPage from "./pages/expenseDashboardPage/ExpenseDashboardPage";

import Layout from "./components/Layout.jsx";
import PublicRoute from "./components/protectedRoute/PublicRoute.jsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";

import "./App.css";
import { ListeningToAuthChanges } from "./redux/auth.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(ListeningToAuthChanges());

    return () => unsubscribe();
  }, [dispatch]);

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
