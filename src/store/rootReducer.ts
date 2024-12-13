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
import legalsReducer from "./features/legalsSlice";
import requirementReducer from "./features/requirementSlice";
import userDetailsReducer from "./features/userDetailsSlice";
import paymentDetailsReducer from "./features/paymentDetailsSlice";
import userDocumentsReducer from "./features/userDocumentsSlice";
import airbnbDubaiReducer from "./features/airbnbDubaiSlice";
import providerseducer from "./features/providersSlice";
import utilitiesrseducer from "./features/utilitiesSlice";

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
  requirements: requirementReducer,
  userdetails: userDetailsReducer,
  userDocuments: userDocumentsReducer,
  paymentDetails: paymentDetailsReducer,
  airbnbdubai: airbnbDubaiReducer,
  providers: providerseducer,
  utilities: utilitiesrseducer,
});

export default rootReducer;
