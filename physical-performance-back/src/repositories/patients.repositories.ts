import prisma from "../database/db";
import { CreatePatient } from "protocols/patients.protocols";

async function insertPatient(data: CreatePatient) {
  return prisma.patients.create({
    data,
  });
}

async function getPatients() {
  return prisma.patients.findMany({
    select: { id: true, name: true, gender: true, birthdate: true },
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
  getPatients,
  findPatients,
  getPatientByName,
  getPatient,
};