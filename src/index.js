import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvdier } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvdier>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvdier>,
  document.getElementById("root")
);
