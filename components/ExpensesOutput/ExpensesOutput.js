import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, ExpensesPeriod }) {
  return <View>
    <ExpensesSummary expenses={expenses} periodName={periodName} />
    <ExpensesList />
  </View>;
}

export default ExpensesOutput;
