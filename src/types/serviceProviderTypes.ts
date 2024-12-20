// Types for Service Providers
export interface ServiceProvider {
  name: string;
  _id: string;
}

// Types for Different Service Categories
export interface ServiceCategory {
  service_providers: ServiceProvider[];
}

// Main Response Type
export interface ProvidersResponse {
  statusCode: number;
  data: Array<{
    internet: ServiceCategory;
    electricity_water: ServiceCategory;
    gas: ServiceCategory;
    chiller: ServiceCategory;
    other: ServiceCategory;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }>;
  message: string;
  success: boolean;
}
