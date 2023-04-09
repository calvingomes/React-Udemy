import React, { useState } from "react";
import "./NewExpenses.css";

const NewExpenses = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...userInput,
    //     title: e.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenses;
