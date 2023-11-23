import { Decimal } from "@prisma/client/runtime/library";

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
  | CommonFunctionalEv & { iml05dist: Decimal; imr05dist: Decimal; iml05ang: number; imr05ang: number }
  | CommonFunctionalEv & { iml06quad: Decimal; imr06quad: Decimal; iml06isqui: Decimal; imr06isqui: Decimal }
  | CommonFunctionalEv & { cmj07: number; iml07sh: number; imr07sh: number }
  | CommonFunctionalEv & { cmj08: Decimal; sj08: Decimal; iml08cmjuni: Decimal; imr08cmjuni: Decimal };

export type UpdateFunctionalEv = CreateFunctionalEv;

export type FunctionalEv = Include<FunctionalEvId, CreateFunctionalEv>;

export type GetFunctionalEvs = [
  functEvs01?: FunctionalEv,
  functEvs02?: FunctionalEv,
  functEvs03?: FunctionalEv,
  functEvs04?: FunctionalEv,
  functEvs05?: FunctionalEv,
  functEvs06?: FunctionalEv,
  functEvs07?: FunctionalEv,
  functEvs08?: FunctionalEv
];

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