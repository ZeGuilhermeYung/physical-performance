/*
  Warnings:

  - You are about to drop the column `evaluationsId` on the `functEvs01` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs02` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs03` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs04` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs05` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs06` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs07` table. All the data in the column will be lost.
  - You are about to drop the column `evaluationsId` on the `functEvs08` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs01` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs02` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs03` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs04` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs05` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs06` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs07` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[evaluationId]` on the table `functEvs08` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "functEvs01" DROP CONSTRAINT "functEvs01_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs02" DROP CONSTRAINT "functEvs02_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs03" DROP CONSTRAINT "functEvs03_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs04" DROP CONSTRAINT "functEvs04_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs05" DROP CONSTRAINT "functEvs05_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs06" DROP CONSTRAINT "functEvs06_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs07" DROP CONSTRAINT "functEvs07_evaluationsId_fkey";

-- DropForeignKey
ALTER TABLE "functEvs08" DROP CONSTRAINT "functEvs08_evaluationsId_fkey";

-- DropIndex
DROP INDEX "functEvs01_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs02_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs03_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs04_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs05_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs06_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs07_evaluationsId_key";

-- DropIndex
DROP INDEX "functEvs08_evaluationsId_key";

-- AlterTable
ALTER TABLE "functEvs01" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs02" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs03" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs04" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs05" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs06" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs07" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- AlterTable
ALTER TABLE "functEvs08" DROP COLUMN "evaluationsId",
ADD COLUMN     "evaluationId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "functEvs01_evaluationId_key" ON "functEvs01"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs02_evaluationId_key" ON "functEvs02"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs03_evaluationId_key" ON "functEvs03"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs04_evaluationId_key" ON "functEvs04"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs05_evaluationId_key" ON "functEvs05"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs06_evaluationId_key" ON "functEvs06"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs07_evaluationId_key" ON "functEvs07"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "functEvs08_evaluationId_key" ON "functEvs08"("evaluationId");

-- AddForeignKey
ALTER TABLE "functEvs01" ADD CONSTRAINT "functEvs01_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs02" ADD CONSTRAINT "functEvs02_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs03" ADD CONSTRAINT "functEvs03_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs04" ADD CONSTRAINT "functEvs04_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs05" ADD CONSTRAINT "functEvs05_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs06" ADD CONSTRAINT "functEvs06_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs07" ADD CONSTRAINT "functEvs07_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functEvs08" ADD CONSTRAINT "functEvs08_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
