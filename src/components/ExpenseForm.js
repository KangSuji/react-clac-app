import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  handelCharge,
  charge,
  amount,
  handelAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            placeholder="예) 랜트비"
            onChange={handelCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            placeholder="예) 100"
            onChange={handelAmount}
          />
        </div>
        <button type="submit" className="btn">
          제출
          <MdSend className="btn-icon" />
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
