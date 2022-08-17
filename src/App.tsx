import React from "react";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
