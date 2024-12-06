import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import propertiesReducer from "./features/propertiesSlice";
import homeContentReducer from "./features/homeContentSlice";
import gallaryReducer from "./features/gallarySlice";
import contactReducer from "./features/contactUsSlice";
import faqsReducer from "./features/faqSlice";
import gallaryTypesReducer from "./features/gallaryTypesSlice";
import countryReducer from "./features/countrySlice";
import priceReducer from "./features/priceSlice";
import testimonialsReducer from "./features/testimonialsSlice";
import guideReducer from "./features/guidesSlice";
import articlesReducer from "./features/articlesSlice";
import blogReducer from "./features/blogSlice";
import legalsReducer from "./features/blogSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertiesReducer,
  homeContent: homeContentReducer,
  gallary: gallaryReducer,
  contactus: contactReducer,
  faqs: faqsReducer,
  gallaryTypes: gallaryTypesReducer,
  country: countryReducer,
  price: priceReducer,
  testimonials: testimonialsReducer,
  guides: guideReducer,
  articles: articlesReducer,
  blogs: blogReducer,
  legals: legalsReducer,
});

export default rootReducer;
