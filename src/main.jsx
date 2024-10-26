import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ContextProivider from "./context/Context.jsx"

createRoot(document.getElementById("root")).render(
  <ContextProivider>
    <App />
  </ContextProivider>
)
