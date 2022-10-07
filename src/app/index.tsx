import React from "react";
import { ListOfUsers } from "../features/usersList/organisms/listOfUsers";
import { GlobalStyles } from "./global-styles/global-styles";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ListOfUsers />
    </Provider>
  );
}

export default App;
