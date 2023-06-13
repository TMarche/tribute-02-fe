import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";

// Enable use of 'F8' to pause execution and enter debugger
document.addEventListener(
    "keydown",
    function (e) {
        if (e.keyCode == 119) {
            // F8
            debugger;
        }
    },
    {
        capture: true,
    }
);

// React/Redux setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
