// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";
import ReactDOM from "react-dom/client";

// ***********************************
// |          Import Font            |
// ***********************************

import "./assets/fontes/GandhiSans-Regular.otf"
import "./assets/fontes/GandhiSans-Bold.otf"

// ***********************************
// |       Import Componente         |
// ***********************************
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
