import { Component } from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

export default class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
          <span className="expense"> {this.props.expense.charge}</span>
          <span className="amount"> {this.props.expense.amount}원 </span>
        </div>
        <div>
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button className="clear-btn">
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}
