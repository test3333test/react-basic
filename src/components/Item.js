import PropTypes from "prop-types";
import "./Item.css";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";

// const Item = ({ title, amount }) => {

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  // const name = useContext(DataContext);
  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>
      {/* {name} */}
      {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
    </li>
  );
};

// Data Validation with PropType
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
