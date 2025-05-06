import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import HelloExternalComponent from "./components/HelloExternalComponent";

// const data = <h1>Hello React</h1>;

// // create Component
// function HelloFunctionComponent() {
//   return <h1>Hello Fuction Component</h1>;
// }

// class HelloClassComponent extends React.Component {
//   render() {
//     return <h1>Hello Class Component</h1>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* {data} */}
    {/* <HelloFunctionComponent /> */}
    {/* <HelloClassComponent /> */}
    {/* <HelloExternalComponent /> */}
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root")); // NOT WORKING , depricated
// ReactDOM.render(<h1>Hello React</h1>, document.getElementById("root")); // NOT WORKING , depricated

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
