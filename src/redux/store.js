import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const userInfoFromStroge = localStorage.getItem("auto_message_userInfo")
  ? JSON.parse(localStorage.getItem("auto_message_userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStroge },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
