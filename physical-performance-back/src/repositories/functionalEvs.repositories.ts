import { CreateFunctEvFunction, CreateFunctionalEv, FunctionalEv } from "protocols/functionalEvs.protocols";
import prisma from "../database/db";

const createFunctEvFunction: CreateFunctEvFunction = {
  functEvs01: prisma.functEvs01.create,
  functEvs02: prisma.functEvs02.create,
  functEvs03: prisma.functEvs03.create,
  functEvs04: prisma.functEvs04.create,
  functEvs05: prisma.functEvs05.create,
  functEvs06: prisma.functEvs06.create,
  functEvs07: prisma.functEvs07.create,
  functEvs08: prisma.functEvs08.create,
};

async function insertFunctEv(body: CreateFunctionalEv): Promise<number>{
  const data = Object.fromEntries(
    Object.entries(body)
      .filter(([key]) => key !== "type")
      .map(([key, value]) => [key, value])
  );

  const functEv: FunctionalEv = await createFunctEvFunction[body.type]({
    data: {
      type: body.type,
      ...data,
    },
  });

  return functEv.id;
}

const functionalEvRepositories = {
  insertFunctEv
};

export default functionalEvRepositories;