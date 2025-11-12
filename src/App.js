import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Altert from "./components/Alert";
const App = () => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [expenses, setExpense] = useState([
    { id: 1, charge: "랜트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const [alert, setAlert] = useState({ show: false });

  const handelCharge = (e) => {
    setCharge(e.target.value);
  };

  const handelAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpense(newExpenses);
    handleAlert({ type: "danger", text: "항목이 삭제되었습니다." });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      const newExpenses = [...expenses, newExpense];
      setExpense(newExpenses);
      setCharge("");
      setAmount(0);
      handleAlert({ type: "success", text: "항목이 생성되었습니다." });
    } else {
      handleAlert({
        type: "danger",
        text: "지출항목과 비용은 필수입력입니다.",
      });
      console.error(
        "Invalid input: charge must be non-empty and amount must be greater than 0"
      );
    }
  };

  return (
    <main className="main-container">
      {alert.show ? <Altert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          handelCharge={handelCharge}
          charge={charge}
          amount={amount}
          handelAmount={handelAmount}
          handleSubmit={handleSubmit}
        />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총지출: <span>원</span>
        </p>
      </div>
    </main>
  );
};
export default App;
