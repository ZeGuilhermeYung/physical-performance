export type PatientAge = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  photo: string;
  gender: string;
  birthdate: Date | string;
  age: number;
  domSm: string;
  domIm: string;
  sports?: string;
  weight: number;
  height: number;
}

export type Patient = Omit<PatientAge, "age">

export type CreatePatient = Omit<Patient, "id">;

export type CreatePatientInfo = Pick<Patient,
  "id" | "name" | "gender" | "birthdate">;

export type PatientInfo = Pick<PatientAge,
  "id" | "name" | "gender" | "age">;