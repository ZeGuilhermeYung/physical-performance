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

export type PatientInfo = Omit<Patient,
  "email" | "phone" | "photo" | "birthdate" | "domSm" | "domIm" | "sports" | "weight" | "height" >;

export type PatientCreateInfo = Omit<Patient,
  "email" | "phone" | "photo" | "age" | "domSm" | "domIm" | "sports" | "weight" | "height">;
