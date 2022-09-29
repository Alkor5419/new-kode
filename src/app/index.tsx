import React from "react";
import { UsersList } from "../features/usersList";
import { GlobalStyles } from "./global-styles/global-styles";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <UsersList />
    </Provider>
  );
}

export default App;
