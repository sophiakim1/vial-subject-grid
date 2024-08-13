export interface Subject {
  id: number;
  name: string;
  age: number;
  gender: Gender; 
  diagnosisDate: string;
  status: Status;
};

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