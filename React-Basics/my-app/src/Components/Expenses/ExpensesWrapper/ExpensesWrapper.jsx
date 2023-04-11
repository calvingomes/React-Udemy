import React, { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import NewExpenses from "../NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const ExpensesWrapper = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onSaveExpenseDataHandler = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    setExpenses((prevState) => {
        return [newExpenseData, ...prevState]
    });
  };

  return (
    <div>
      <NewExpenses onSaveExpenseData={onSaveExpenseDataHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpensesWrapper;
