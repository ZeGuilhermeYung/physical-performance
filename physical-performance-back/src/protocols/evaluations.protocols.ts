export type Evaluation = {
  id: number;
  patientId: number | string;
  evType: string;
  createdAt: Date | string;
};

export type CreateFunctionalEvaluation = Omit<Evaluation, "id" | "createdAt">;

export type UpdateFunctionalEvaluation = 
  Omit<CreateFunctionalEvaluation, "id"| "patientId" | "createdAt">;

export type EvaluationFunction = {
  [key: string]: (data: any) => Promise<any>;
};

export type EvaluationParams = {
  evType: string;
} & { patientId: string }