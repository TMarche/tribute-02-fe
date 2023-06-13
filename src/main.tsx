import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
