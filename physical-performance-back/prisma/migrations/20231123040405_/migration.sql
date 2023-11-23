/*
  Warnings:

  - A unique constraint covering the columns `[patientId]` on the table `evaluations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `evType` to the `evaluations` table without a default value. This is not possible if the table is not empty.
  - Made the column `evaluationId` on table `functEvs01` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs02` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs03` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs04` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs05` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs06` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs07` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evaluationId` on table `functEvs08` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "evaluations" ADD COLUMN     "evType" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "functEvs01" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs02" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs03" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs04" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs05" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs06" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs07" ALTER COLUMN "evaluationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "functEvs08" ALTER COLUMN "evaluationId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "evaluations_patientId_key" ON "evaluations"("patientId");
