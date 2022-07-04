import "./i18n";
import "./styles/app-base.css";
import "./styles/app-components.css";
import "./styles/app-utilities.css";
import { createRoot } from "react-dom/client";
import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
