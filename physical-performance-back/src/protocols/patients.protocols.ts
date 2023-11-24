import { Evaluation, NewEvaluation } from "./evaluations.protocols";

export type PatientEvaluations = {
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
  evaluations: Evaluation[] | NewEvaluation[];
}

export type Patient = Omit<PatientEvaluations, "age" | "evaluations">

export type CreatePatient = Omit<Patient, "id">

export type CreatePatientInfo = Pick<Patient,
  "id" | "name" | "gender" | "birthdate"> & {evaluations?:{finishedAt: Date}}

export type PatientInfo = Pick<PatientEvaluations,
  "id" | "name" | "gender" | "age">


export type GetPatientEvaluations = Omit<PatientEvaluations, "age">;
