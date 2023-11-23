/*
  Warnings:

  - You are about to drop the `functionalEvaluations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs01` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs02` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs03` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs04` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs05` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs06` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs07` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationsId]` on the table `functEvs08` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs01Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs02Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs03Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs04Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs05Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs06Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs07Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_functEvs08Id_fkey";

-- DropForeignKey
ALTER TABLE "functionalEvaluations" DROP CONSTRAINT "functionalEvaluations_patientId_fkey";

-- AlterTable
ALTER TABLE "functEvs01" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs02" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs03" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs04" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs05" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs06" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs07" ADD COLUMN     "evaluationsId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs08" ADD COLUMN     "evaluationsId" INTEGER;

-- DropTable
DROP TABLE "functionalEvaluations";

-- CreateTable
CREATE TABLE "evaluations" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "functEvs01_evaluationsId_key" ON "functEvs01"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs02_evaluationsId_key" ON "functEvs02"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs03_evaluationsId_key" ON "functEvs03"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs04_evaluationsId_key" ON "functEvs04"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs05_evaluationsId_key" ON "functEvs05"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs06_evaluationsId_key" ON "functEvs06"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs07_evaluationsId_key" ON "functEvs07"("evaluationsId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs08_evaluationsId_key" ON "functEvs08"("evaluationsId");

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs01" ADD CONSTRAINT "functEvs01_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs02" ADD CONSTRAINT "functEvs02_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs03" ADD CONSTRAINT "functEvs03_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs04" ADD CONSTRAINT "functEvs04_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs05" ADD CONSTRAINT "functEvs05_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs06" ADD CONSTRAINT "functEvs06_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs07" ADD CONSTRAINT "functEvs07_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs08" ADD CONSTRAINT "functEvs08_evaluationsId_fkey" FOREIGN KEY ("evaluationsId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
