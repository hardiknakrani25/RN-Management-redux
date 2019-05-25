import { combineReducers } from "redux";
import EmployeeFormReducer from "./employeeFormReducer";
import AuthReducer from "./authReducer";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
