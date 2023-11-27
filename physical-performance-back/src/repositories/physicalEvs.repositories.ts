import { PhysicalEvFunction, CreatePhysicalEv, PhysicalEv, UpdatePhysicalEv, GetPhysicalEvs } from "../protocols/physicalEvs.protocols";
import prisma from "../database/db";

const createPhysicalEvFunction: PhysicalEvFunction = {
  physicalEvsImages: prisma.physicalEvsImages.create,
  physicalEvs01: prisma.physicalEvs01.create,
  physicalEvs02: prisma.physicalEvs02.create,
  physicalEvs03: prisma.physicalEvs03.create,
  physicalEvs04: prisma.physicalEvs04.create,
  physicalEvs05: prisma.physicalEvs05.create
};

const updatePhysicalEvFunction: PhysicalEvFunction = {
  physicalEvsImages: prisma.physicalEvsImages.update,
  physicalEvs01: prisma.physicalEvs01.update,
  physicalEvs02: prisma.physicalEvs02.update,
  physicalEvs03: prisma.physicalEvs03.update,
  physicalEvs04: prisma.physicalEvs04.update,
  physicalEvs05: prisma.physicalEvs05.update
};

const findPhysicalEvFunction: PhysicalEvFunction = {
  physicalEvsImages: prisma.physicalEvsImages.findFirst,
  physicalEvs01: prisma.physicalEvs01.findFirst,
  physicalEvs02: prisma.physicalEvs02.findFirst,
  physicalEvs03: prisma.physicalEvs03.findFirst,
  physicalEvs04: prisma.physicalEvs04.findFirst,
  physicalEvs05: prisma.physicalEvs05.findFirst
};

async function insertPhysicalEv(body: CreatePhysicalEv, evCategory: string): Promise<PhysicalEv>{
  const data = Object.fromEntries(
    Object.entries(body)
      .filter(([key]) => key !== evCategory)
      .map(([key, value]) => [key, value])
  );
  const physicalEv: PhysicalEv = await createPhysicalEvFunction[evCategory]({
      data,
  });
  console.log(physicalEv)
  return physicalEv;
}

async function updatePhysicalEv(id: number, body: UpdatePhysicalEv, evCategory: string): Promise<PhysicalEv>{
  const data = Object.fromEntries(
    Object.entries(body)
      .filter(([key]) => key !== evCategory)
      .map(([key, value]) => [key, value])
  );
  const physicalEv: PhysicalEv = await updatePhysicalEvFunction[evCategory]({
      data,
      where: { id }
  });

  return physicalEv;
}

async function findPhysicalEv(evaluationId: number, evCategory: string): Promise<PhysicalEv>{
  const functEv: PhysicalEv = await findPhysicalEvFunction[evCategory]({
      where: { evaluationId }
  });

  return functEv;
}

async function getPhysicalEvs(evaluationId: number): Promise<GetPhysicalEvs> {
  const physicalEvs = await prisma.evaluations.findUnique({
    where: { id: evaluationId },
    include: {
      physicalEvsImages: true,
      physicalEvs01: true,
      physicalEvs02: true,
      physicalEvs03: true,
      physicalEvs04: true,
      physicalEvs05: true
    },
  });

  const result: GetPhysicalEvs = [
    physicalEvs.physicalEvsImages,
    physicalEvs.physicalEvs01,
    physicalEvs.physicalEvs02,
    physicalEvs.physicalEvs03,
    physicalEvs.physicalEvs04,
    physicalEvs.physicalEvs05
  ];
  
  return result;
};

const physicalEvRepositories = {
  insertPhysicalEv,
  updatePhysicalEv,
  findPhysicalEv,
  getPhysicalEvs
};

export default physicalEvRepositories;