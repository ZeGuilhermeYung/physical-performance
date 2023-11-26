export type NewEvaluation = {
  id: number;
  patientId: number | string;
  evType: string;
  createdAt: Date | string;
  complete: boolean;
};

export type Evaluation = Omit<NewEvaluation, "complete">

export type EvaluationFunction = {
  [key: string]: (data: any) => Promise<any>;
};

export type CreateEvaluation = {
  evType: string;
  patientId: number;
};

export type EvaluationParams = {
  id?: string;
  evCategory: string;
};