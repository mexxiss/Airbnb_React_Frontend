import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";
import homeContentReducer from "./features/homeContentSlice";
import gallaryReducer from "./features/gallarySlice";
import contactReducer from "./features/contactUsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  homeContent: homeContentReducer,
  gallary: gallaryReducer,
  contactus: contactReducer,
});

export default rootReducer;
