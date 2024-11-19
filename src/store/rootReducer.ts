import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
});

export default rootReducer;
