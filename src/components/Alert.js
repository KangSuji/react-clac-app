import "./Alert.css";
const Altert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Altert;
