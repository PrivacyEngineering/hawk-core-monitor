export interface Field {
  id: string;
  description: string;
  personalData: boolean;
  specialCategoryPersonalData: boolean;
}

export interface TableProps<T> {
  labels: string[];
  items: readonly T[];
}

export interface TableRowProps<T> {
  item: T;
}

export interface AnyMapping {
  id: string;
  service: string;
  endpoint: {
    protocol: string;
    method: string;
    path: string;
  };
  fields?: MappingFieldReference[];
}

export interface Mapping extends AnyMapping {
  fields: MappingFieldReference[]
}

export interface MappingFieldReference {
  id: string;
  path: {
    type: string;
    value: string;
  }
}

export interface Request {
  requestor: string;
  provider: string;
  date: string;
  data: any;
}

export interface RequestsByServicePair {
  requestor: string;
  provider: string;
  count: number;
  lastInvocation: string;
}

export interface RequestsByEndpoint {
  provider: string;
  endpoint: string;
  count: number;
  lastInvocation: string;
}

export interface DataCategory {
  id: string;
  name: string;
  value: number;
}

export interface MappingFieldReference {
  id: string;
  path: {
    type: string;
    value: string;
  }
}
