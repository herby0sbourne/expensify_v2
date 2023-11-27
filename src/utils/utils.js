import moment from "moment";

export const fixAmount = (amount) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const getExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
};

export const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;

  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return b.createdAt > a.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return b.amount > a.amount ? 1 : -1;
      }
    });
};
