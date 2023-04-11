import React, { useState } from "react";
import "./ExpenseList.css";
import ExpensesFilter from "../ExpensesFiler/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((exp) => {
        return (
          <ExpenseItem name={exp.title} date={exp.date} price={exp.amount} />
        );
      })}
    </div>
  );
};

export default ExpenseList;
