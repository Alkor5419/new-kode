import React from "react";
import { ListOfUsers } from "../features/users-list/organisms/list-of-users";
import { GlobalStyles } from "./global-styles/global-styles";
import { Provider } from "react-redux";
import { store } from "./store";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { UserProfile } from "../features/user-page/organisms/user-profile";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<ListOfUsers />} />
          <Route
            path="/users/:id"
            element={<UserProfile />}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
