import prisma from "../database/db";
import { CreatePatient, CreatePatientInfo, Patient, UpdatePatient } from "../protocols/patients.protocols";

async function insertPatient(data: CreatePatient): Promise<Patient> {
  const formattedData = {
    ...data,
    birthdate: new Date(data.birthdate),
  };

  return prisma.patients.create({
    data: formattedData,
  });
}

async function updatePatient(id: number, data: UpdatePatient) {
  return prisma.patients.update({
    where: { id },
    data
  });
}

async function getPatients(): Promise<CreatePatientInfo[]> {
  const patientsInfo = await prisma.patients.findMany({
    select: {
      id: true,
      name: true,
      gender: true,
      birthdate: true,
      evaluations: {
        select: { finishedAt: true },
        orderBy: { finishedAt: 'desc' },
        take: 1,
      },
    },
  });

  return patientsInfo.map(patient => {
    const latestEvaluation = patient.evaluations[0];
    return {
      id: patient.id,
      name: patient.name,
      gender: patient.gender,
      birthdate: patient.birthdate,
      evaluations: latestEvaluation
        ? { finishedAt: latestEvaluation.finishedAt }
        : undefined,
    };
  });
}

async function findPatients(name: string) {
  return prisma.patients.findMany({
    select: { id: true, name: true, gender: true, birthdate: true },
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });
}

async function getPatientByName(name: string) {
  return prisma.patients.findFirst({
    select: { name: true },
    where: { name },
  });
}

async function getPatient(id: number) {
  return prisma.patients.findUnique({
    where: { id },
  });
}

export const patientsRepositories = {
  insertPatient,
  updatePatient,
  getPatients,
  findPatients,
  getPatientByName,
  getPatient
};