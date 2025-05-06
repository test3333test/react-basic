import React, { useState, useEffect, reducer, useReducer } from "react";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const design = { color: "red", textAlign: "center", frontSize: "1.5rem" };
  const initData = [
    { id: 1, title: "Miete", amount: -3000 },
    { id: 2, title: "Lohn", amount: 50000 },
  ];
  // const initData = [];
  // const [items, setItems] = useState(initData);
  // const [items, setItems] = useState(initState);
  const [items, setItems] = useState([]);

  const initState = [
    { id: 1, title: "Miete", amount: -2000 },
    { id: 2, title: "Lohn", amount: 12000 },
    { id: 3, title: "Reise", amount: -500 },
    { id: 4, title: "Online Verkauf", amount: 2000 },
  ];

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      -1 *
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0);
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  // // reducer state
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);

  return (
    // <DataContext.Provider value={"Lab7Demo"}>

    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={design}>Buchhaltung1234</h1>
        {/* {showReport && <ReportComponent />} */}
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Total report</Link>
              </li>
              <li>
                <Link to="/insert">Add item</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<ReportComponent />} />
              <Route
                exact
                path="/insert"
                element={[
                  <FormComponent onAddItem={onAddNewItem} />,
                  <Transaction items={items} />,
                ]}
              />
            </Routes>
          </div>
        </Router>

        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>show</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>hide</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
