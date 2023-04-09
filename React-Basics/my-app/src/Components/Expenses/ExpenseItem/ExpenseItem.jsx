import React from "react";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({name, date, price}) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
