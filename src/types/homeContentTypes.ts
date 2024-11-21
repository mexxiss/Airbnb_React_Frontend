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
}