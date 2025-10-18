import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesApp from "@routes/RoutesApp";
import { Provider } from "react-redux";
import { store, persistor } from "@store";
import { PersistGate } from "redux-persist/integration/react";
import "./services/axios-global.js"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RoutesApp />
    </PersistGate>
  </Provider>
);
