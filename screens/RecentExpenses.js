import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { useContext } from "react";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const resentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });

  return <ExpensesOutput expenses={resentExpenses} expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;
