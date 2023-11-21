import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-dark-blue">
        <div className="container">
          <div className="flex justify-between items-center py-s-size px-[0]">
            <Link to="/dashboard" className="text-white no-underline">
              <h1>Expensify</h1>
            </Link>
            <button className="btt">Logout</button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
