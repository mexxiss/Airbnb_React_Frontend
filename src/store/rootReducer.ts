import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";
import homeContentReducer from "./features/homeContentSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  homeContent: homeContentReducer
});

export default rootReducer;
