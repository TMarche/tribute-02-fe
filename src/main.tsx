import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

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
const store = createStore(reducers, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
