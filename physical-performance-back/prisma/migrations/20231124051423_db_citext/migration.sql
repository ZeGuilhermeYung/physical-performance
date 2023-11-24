/*
  Warnings:

  - Changed the type of `name` on the `patients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "patients" DROP COLUMN "name",
ADD COLUMN     "name" CITEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "patients_name_key" ON "patients"("name");
