import moment from "moment";
import { Link } from "react-router-dom";
import { fixAmount } from "../../utils/utils.js";

const ExpenseListItem = ({ id, desc, amount, createdAt }) => {
  return (
    <Link className="list_item" to={`/edit/${id}`}>
      <div>
        <h3 className="break-all">{desc}</h3>
        <span className="text-grey text-[1.4rem]">
          {moment(createdAt || new Date()).format("MMMM Do, YYYY")}
        </span>
      </div>
      <h3 className="mt-s-size md:m-[0] md:pl-s-size">{fixAmount(amount)}</h3>
    </Link>
  );
};
export default ExpenseListItem;
