type Include<T, U> = T & U;

export type CommonFunctionalEv = {
  evaluationId: number;
  observation?: string;
}

export type FunctionalEvId = {
  id: number;
}

export type CreateFunctionalEv =
  | CommonFunctionalEv & { iml01: number; imr01: number }
  | CommonFunctionalEv & { iml02: number; imr02: number }
  | CommonFunctionalEv & { iml03: string; imr03: string }
  | CommonFunctionalEv & { iml04: number; imr04: number }
  | CommonFunctionalEv & { iml05dist: number; imr05dist: number; iml05ang: number; imr05ang: number }
  | CommonFunctionalEv & { iml06quad: number; imr06quad: number; iml06isqui: number; imr06isqui: number }
  | CommonFunctionalEv & { cmj07: number; iml07sh: number; imr07sh: number }
  | CommonFunctionalEv & { cmj08: number; sj08: number; iml08cmjuni: number; imr08cmjuni: number };

export type UpdateFunctionalEv = CreateFunctionalEv;

export type FunctionalEv = Include<FunctionalEvId, CreateFunctionalEv>;

export type FunctEvFunction = {
  [key: string]: (data: any) => Promise<any>;
};

export type CreateFunctEvParam = {
  [key: string]: (data: any) => Promise<any>;
};

export type FunctionalEvParams = {
  patientId: string;
  evType: string,
  evaluationId: string;
  evCategory: string;
  functEvId?: string;
}