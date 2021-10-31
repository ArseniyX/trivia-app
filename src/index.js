import React from "react";
import ReactDOM from "react-dom";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store/store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,
  *:before,
  *:after {
    font-family: Roboto;
    box-sizing: border-box;
    transition: 0.5s ease-in-out;
  }

  i,em,
  b,strong,
  span {
    transition: none;
  }


*:before,
*:after {
  z-index: -1;
}

  body {
    margin: 0;
    padding: 0;
  }

  .triangle-container {
    ${"" /* margin-top: 10px; */}
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
