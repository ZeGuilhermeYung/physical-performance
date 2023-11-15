export type CommonEvaluation = {
  id: number;
  patientId: number | string;
  evOrder: number;
  createdAt: Date | string;
};

export type FunctionalEvaluation = CommonEvaluation & {
    functEvs01Id?: number;
    functEvs02Id?: number;
    functEvs03Id?: number;
    functEvs04Id?: number;
    functEvs05Id?: number;
    functEvs06Id?: number;
    functEvs07Id?: number;
    functEvs08Id?: number;
  };

export type CreateFunctionalEvaluation = Omit<FunctionalEvaluation, "id" | "createdAt">;

export type UpdateFunctionalEvaluation = CreateFunctionalEvaluation;

export type EvaluationFunction = {
  [key: string]: (data: any) => Promise<any>;
};

export type EvaluationParams = {
  evType: string;
} & { patientId: string }