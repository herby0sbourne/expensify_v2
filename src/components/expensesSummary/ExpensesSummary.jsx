import { Link } from "react-router-dom";
import { fixAmount } from "../../utils/utils.js";

const ExpensesSummary = () => {
  return (
    <div className="bg-off-white py-l-size px-[0] mb-l-size">
      <div className="container">
        <h1 className="font-light">
          Viewing <span className="font-bold">{1}</span> {"expenses"} total{" "}
          <span className="font-bold">{fixAmount(25000)}</span>
        </h1>
        <div className="mt-m-size">
          <Link to="/create" className="btt">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExpensesSummary;
