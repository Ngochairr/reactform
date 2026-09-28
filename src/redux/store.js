import { createStore } from "redux";
import studentReducer from "./reducers/studentReducer";

const store = createStore(studentReducer);

export default store;