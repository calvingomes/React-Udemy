import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({name, date, price}) => {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
