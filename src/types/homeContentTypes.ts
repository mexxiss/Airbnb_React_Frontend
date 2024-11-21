// Cleaning and Maintenance
interface CleaningWhatPeopleSay {
  title: string;
  description: string;
}

interface CleaningMaintenanceItem {
  whats_people_say: CleaningWhatPeopleSay[];
}

// Interior Design
interface InteriorDesignWhatIncludedItem {
  title: string;
  description: string;
  others: string[];
}

interface InteriorDesignHowItWorksItem {
  title: string;
  description: string;
}

interface InteriorDesignPage {
  description: string;
  what_inclued: InteriorDesignWhatIncludedItem[];
  how_it_works: InteriorDesignHowItWorksItem[];
}

// Listing Management
interface ListingManagementWhatIncludedItem {
  title: string;
  description: string;
}

interface ListingManagement {
  title: string;
  description: string;
  what_inclued: ListingManagementWhatIncludedItem[];
}

// Management Support
interface ManagementSupportBottomContentItem {
  title: string;
  description: string;
}

interface ManagementSupport {
  title: string;
  description: string;
  bottom_content: ManagementSupportBottomContentItem[];
}

interface Fact {
  icon: string;
  title: string;
  description: string;
  _id: string;
}
interface Feature {
  title: string;
  description: string;
  icon: string;
  _id: string;
}
interface WhatPeopleSays {
  title: string;
  description: string;
  facts: Fact[];
}
export interface IHomeContentData {
  what_people_says: WhatPeopleSays;
  _id: string;
  banner_images: string[];
  features: Feature[];
  __v: number;
  property_return_rate: number;
  property_rent: string;
  daily_complete_transactions: string;
  total_customers: string;
  total_properties: string;
  properties_sale: string;
  apartment_rent: string;
  cleaning_maintenance: CleaningMaintenanceItem;
  interior_design_page: InteriorDesignPage;
  listing_management: ListingManagement;
  management_support: ManagementSupport;
}
