import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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
        <App />
    </React.StrictMode>
);
