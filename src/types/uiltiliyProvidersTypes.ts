export interface UtilityUpdate {
  name: string;
  provider_name: string;
  account_no: string;
  paid_by: string;
  web_login: string;
  web_pass: string;
  already_have_account?: boolean;
  _id?: string;
  property?: string;
  createdAt?: string;
  updatedAt?: string;
  user_id: string;
  type: string;
}


export interface RequiredUtility {
  _id: string;
  field_name: string;
  service_name: string | null;
  service_provider: string | null;
  account_no: string | null;
  paid_by: string | null;
  web_login: string | null;
  web_pass: string  | null;
  already_have_account: boolean;
}

export interface OtherUtilities {
  // _id: string | null | undefined;
  temp_id?: number;
  field_name?: string;
  service_name?: string;
  service_provider?: string;
  account_no?: string;
  paid_by?: string;
  web_login?: string;
  web_pass?: string;
  link?: string;
  already_have_account?: boolean;
}

export interface PropertyUtilities {
  _id: string,
  internet: RequiredUtility,
  electricity_water: RequiredUtility,
  gas: RequiredUtility,
  chiller: RequiredUtility,
  other: OtherUtilities[],
  property: String,
  user: String,
  __v: number,
  createdAt: string,
  updatedAt: string,
}