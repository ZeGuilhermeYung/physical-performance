type Include<T, U> = T & U;

export type CommonFunctionalEv = {
  observation?: string;
}

export type FunctionalEvId = {
  id: number;
}

export type CreateFunctionalEv =
  | CommonFunctionalEv & { type: 'functEvs01'; iml01: number; imr01: number }
  | CommonFunctionalEv & { type: 'functEvs02'; iml02: number; imr02: number }
  | CommonFunctionalEv & { type: 'functEvs03'; iml03: string; imr03: string }
  | CommonFunctionalEv & { type: 'functEvs04'; iml04: number; imr04: number }
  | CommonFunctionalEv & { type: 'functEvs05'; iml05dist: number; imr05dist: number; iml05ang: number; imr05ang: number }
  | CommonFunctionalEv & { type: 'functEvs06'; iml06quad: number; imr06quad: number; iml06isqui: number; imr06isqui: number }
  | CommonFunctionalEv & { type: 'functEvs07'; cmj07: number; iml07sh: number; imr07sh: number }
  | CommonFunctionalEv & { type: 'functEvs08'; cmj08: number; sj08: number; iml08cmjuni: number; imr08cmjuni: number };

export type FunctionalEv = Include<FunctionalEvId, CreateFunctionalEv>;

export type CreateFunctEvFunction = {
  [key: string]: (data: any) => Promise<any>;
};