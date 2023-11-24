-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_patientId_fkey";

-- AlterTable
ALTER TABLE "evaluations" ADD COLUMN     "finishedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
