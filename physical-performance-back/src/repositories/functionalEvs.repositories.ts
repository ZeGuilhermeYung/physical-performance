import { FunctEvFunction, CreateFunctionalEv, FunctionalEv, UpdateFunctionalEv } from "../protocols/functionalEvs.protocols";
import prisma from "../database/db";

const createFunctEvFunction: FunctEvFunction = {
  functEvs01: prisma.functEvs01.create,
  functEvs02: prisma.functEvs02.create,
  functEvs03: prisma.functEvs03.create,
  functEvs04: prisma.functEvs04.create,
  functEvs05: prisma.functEvs05.create,
  functEvs06: prisma.functEvs06.create,
  functEvs07: prisma.functEvs07.create,
  functEvs08: prisma.functEvs08.create,
};

const updateFunctEvFunction: FunctEvFunction = {
  functEvs01: prisma.functEvs01.update,
  functEvs02: prisma.functEvs02.update,
  functEvs03: prisma.functEvs03.update,
  functEvs04: prisma.functEvs04.update,
  functEvs05: prisma.functEvs05.update,
  functEvs06: prisma.functEvs06.update,
  functEvs07: prisma.functEvs07.update,
  functEvs08: prisma.functEvs08.update,
};

async function insertFunctEv(body: CreateFunctionalEv, evCategory: string): Promise<FunctionalEv>{
  const data = Object.fromEntries(
    Object.entries(body)
      .filter(([key]) => key !== evCategory)
      .map(([key, value]) => [key, value])
  );
  const functEv: FunctionalEv = await createFunctEvFunction[evCategory]({
      data,
  });

  return functEv;
}

async function updateFunctEv(id: number, body: UpdateFunctionalEv, evCategory: string): Promise<FunctionalEv>{
  const data = Object.fromEntries(
    Object.entries(body)
      .filter(([key]) => key !== evCategory)
      .map(([key, value]) => [key, value])
  );
  const functEv: FunctionalEv = await updateFunctEvFunction[evCategory]({
      data,
      where: { id }
  });

  return functEv;
}

const functionalEvRepositories = {
  insertFunctEv,
  updateFunctEv
};

export default functionalEvRepositories;