export type FunctionalEv = {
  id: number;
  type: string;
  patientId: number;
  evOrder: number;
  iml01?: number;
  imr01?: number;
  iml02?: number;
  imr02?: number;
  iml03?: string;
  imr03?: string;
  iml04?: number;
  imr04?: number;
  iml05dist?: number;
  imr05dist?: number;
  iml05ang?: number;
  imr05ang?: number;
  iml06quad?: number;
  imr06quad?: number;
  iml06isqui?: number;
  imr06isqui?: number;
  cmj07?: number;
  iml07sh?: number;
  imr07sh?: number;
  cmj08?: number;
  sj08?: number;
  iml08cmjuni?: number;
  imr08cmjuni?: number;
  observation?: string;
}

export type CreateFunctionalEv = Omit<FunctionalEv, "id">;