import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import AddExpensePage from './pages/addExpensePage/AddExpensePage.jsx';
import EditExpensePage from './pages/editExpensePage/EditExpensePage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} />
    </Routes>
  );
};

export default App;
