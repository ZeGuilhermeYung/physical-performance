import { CreateFunctionalEv } from "protocols/functionalEvs.protocols";
import prisma from "../database/db";

async function insertFunctEv(params: CreateFunctionalEv) {
  return prisma[params.type].create({
    data: {
      type: params.type,
      patientId: params.patientId,
      evOrder: params.evOrder,
      iml01: params.iml01,
      imr01: params.imr01,
      iml02: params.iml02,
      imr02: params.imr02,
      iml03: params.iml03,
      imr03: params.imr03,
      iml04: params.iml04,
      imr04: params.imr04,
      iml05dist: params.iml05dist,
      imr05dist: params.imr05dist,
      iml05ang: params.iml05ang,
      imr05ang: params.imr05ang,
      iml06quad: params.iml06quad,
      imr06quad: params.imr06quad,
      iml06isqui: params.iml06isqui,
      imr06isqui: params.imr06isqui,
      cmj07: params.cmj07,
      iml07sh: params.iml07sh,
      imr07sh: params.imr07sh,
      cmj08: params.cmj08,
      sj08: params.sj08,
      iml08cmjuni: params.iml08cmjuni,
      imr08cmjuni: params.imr08cmjuni,
      observation: params.observation,
    },
  });
}

async function findFunctEv(type: string, patientId: number, evOrder: number) {
  return prisma[type].findFirst({
    where: { patientId, evOrder },
  });
}

const functionalEvRepositories = {
  insertFunctEv,
  findFunctEv,
};

export default functionalEvRepositories;