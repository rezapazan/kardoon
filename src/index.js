import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Compose } from "./utils/composer";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

// styles
import "./assets/styles/landing.css";
import "./assets/styles/index.css";

// providers
import DashboardProvider from "./services/context/dashboardContext/DashboardProvider";
import { ThemeProvider } from "@material-ui/core";
import RTLProvider from "./utils/RTLProvider";
import TaskModalProvider from "./services/context/taskModalContext/TaskModalProvider";

ReactDOM.render(
  <BrowserRouter>
    <Compose components={[DashboardProvider, TaskModalProvider]}>
      <ThemeProvider theme={theme}>
        <RTLProvider>
          <CssBaseline />
          <App />
        </RTLProvider>
      </ThemeProvider>
    </Compose>
  </BrowserRouter>,
  document.getElementById("root")
);
