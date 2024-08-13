type Subject = {
  id: number;
  name: string;
  age: number;
  gender: Gender; 
  diagnosisDate: string; // TODO: Use Date type
  status: Status;
};

enum Gender {
  Male = "Male",
  Female = "Female",
}

enum Status {
  Approved = "Approved",
  Pending = "Pending",
  Testing = "Testing",
  Released = "Released",
}