export interface Subject {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  diagnosisDate: string;
  status: Status;
}

export interface Filters {
  gender: string[];
  status: string[];
}

export interface SortOptions {
  key: SortKey;
  order: SortOrder;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum Status {
  Approved = "Approved",
  Pending = "Pending",
  Testing = "Testing",
  Released = "Released",
}

export enum SortKey {
  Name = "name",
  Age = "age",
  DiagnosisDate = "diagnosisDate",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export enum FilterKey {
  Gender = "gender",
  Status = "status",
}
