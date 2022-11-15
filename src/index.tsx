// Import dependencies
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Import pages
import App from "./pages/App";

// Import styles and store.
import { store } from "./app/store";
import "./assets/styles/styles.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);