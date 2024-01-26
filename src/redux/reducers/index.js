import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";

export default combineReducers({
    catalogState: catalogReducer
});
