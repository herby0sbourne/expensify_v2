import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import AddExpensePage from "./pages/addExpensePage/AddExpensePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/create" element={<AddExpensePage />} />
    </Routes>
  );
};

export default App;
