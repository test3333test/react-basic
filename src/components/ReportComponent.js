import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // return <div>Hello : {name}</div>;
  return (
    <div>
      {/* <DataContext.Consumer>
        {(context) => (
          <p>
            income : {context.income} expense : {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}

      {/* <p>income : {income}</p>
      <p>expense : {expense}</p> */}

      <h4>Restbetrag (CHF)</h4>
      <h1 className="report plus">CHF {formatNumber((income - expense).toFixed(2))}</h1>
      <h1 className="report minus">CHF {formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>total income</h4>
          <p className="report plus">CHF {formatNumber(income)}</p>
        </div>
        <div>
          <h4>total expense</h4>
          <p className="report minus">CHF {formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
