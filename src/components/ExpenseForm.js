import { Component } from "react";
import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

export default class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div className="form-center">
          <div className="form-group">
            <lable htmlFor="charge">지출항목</lable>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="예) 랜트비"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="amount">비용</lable>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="예) 100"
            />
          </div>
          <button type="submit" className="btn">
            제출
            <MdSend className="btn-icon" />
          </button>
        </div>
      </form>
    );
  }
}
