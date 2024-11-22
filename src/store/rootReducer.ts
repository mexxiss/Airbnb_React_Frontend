import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";
import homeContentReducer from "./features/homeContentSlice";
import gallaryReducer from "./features/gallarySlice";
import contactReducer from "./features/contactUsSlice";
import faqsReducer from "./features/faqSlice";
import gallaryTypesReducer from "./features/gallaryTypesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  homeContent: homeContentReducer,
  gallary: gallaryReducer,
  contactus: contactReducer,
  faqs: faqsReducer,
  gallaryTypes: gallaryTypesReducer
});

export default rootReducer;
