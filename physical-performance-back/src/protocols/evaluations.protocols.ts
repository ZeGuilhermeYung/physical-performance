export type NewEvaluation = {
  id: number;
  patientId: number | string;
  evType: string;
  createdAt: Date | string;
  finishedAt: Date | string;
  finishedAtTime: Date | string;
  duration: {
    formattedMessage: string;
    time: number;
  }
};

export type Evaluation = Omit<NewEvaluation, "duration" | "finishedAtTime">

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