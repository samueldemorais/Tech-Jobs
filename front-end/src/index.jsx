import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import CardView from "./Views/CardView";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container">
                    <h1
                        className="text-center"
                        style={{ color: "#FFFFFF" }}
                    >
                        Tech Job Vacancies
                    </h1>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/teste" element={<CardView />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
