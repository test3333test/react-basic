import "./Transaction.css";
import Item from "./Item";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  // const name = useContext(DataContext);
  // const { income, expense } = useContext(DataContext);

  // const data = [  // regular id
  //   { id: 1, title: "Arztbesuch", amount: 2000 },
  //   { id: 2, title: "Tanken", amount: 4000 },
  //   { id: 3, title: "Lohn", amount: 1500 },
  //   { id: 4, title: "Reise", amount: 2500 },
  //   { id: 5, title: "Miete", amount: 1800" },
  //   { id: 6, title: "Versicherung", amount: 300 },
  // ];

  // const data = [
  //   // uuid
  //   { title: 8000, amount: "Spitalaufenthalt" },
  //   { amount: 4000 },
  //   { title: "Lohn" },
  //   { title: "Arztbesuch", amount: 2000 },
  //   { title: "Tanken", amount: 4000 },
  //   { title: "Lohn", amount: 1500 },
  //   { title: "Reise", amount: 2500 },
  //   { title: "Miete", amount: 1800 },
  //   { title: "Versicherung", amount: 300 },
  // ];

  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          // return <Item title={element.title} amount={element.amount} />;

          // regular id
          return <Item {...element} key={element.id} />; //kurze code, wenn prop-name = map-name , key ist nötig, sonst gibt es warning

          // uuid
          // return <Item {...element} key={uuidv4()} />; //kurze code, wenn prop-name = map-name , key ist nötig, sonst gibt es warning
        })}
      </ul>
      {/* <p>income : {income}</p>
      <p>expense : {expense}</p> */}

      {/* {name} */}
      {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
    </div>
  );
};

export default Transaction;
