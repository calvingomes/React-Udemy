import React, { useState } from "react";
import "./ExpenseList.css";
import ExpensesFilter from "../ExpensesFiler/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses found!</p>
      ) : (
        filteredExpenses.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              name={exp.title}
              date={exp.date}
              price={exp.amount}
            />
          );
        })
      )}
    </div>
  );
};

export default ExpenseList;
