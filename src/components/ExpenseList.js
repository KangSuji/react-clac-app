import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";

export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className="list">
          {this.props.initialExpenses.map((expense) => {
            return <ExpenseItem expense={expense} key={expense.id} />;
          })}
        </ul>
        <button className="btn">
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      </>
    );
  }
}
