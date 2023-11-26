-- AlterTable
ALTER TABLE "patients" ADD COLUMN     "diseaseHistory" VARCHAR(255),
ADD COLUMN     "injurysHistory" VARCHAR(255);

-- CreateTable
CREATE TABLE "physicalEvsImages" (
    "id" SERIAL NOT NULL,
    "frontImage" TEXT NOT NULL,
    "backImage" TEXT NOT NULL,
    "rightImage" TEXT NOT NULL,
    "leftImage" TEXT NOT NULL,
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvsImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalEvs01" (
    "id" SERIAL NOT NULL,
    "chest" DECIMAL(5,1) NOT NULL,
    "abdomen" DECIMAL(5,1) NOT NULL,
    "rRelaxedBiceps" DECIMAL(5,1) NOT NULL,
    "rContractedBiceps" DECIMAL(5,1) NOT NULL,
    "lRelaxedBiceps" DECIMAL(5,1) NOT NULL,
    "lContractedBiceps" DECIMAL(5,1) NOT NULL,
    "rRelaxedThigh" DECIMAL(5,1) NOT NULL,
    "rContractedThigh" DECIMAL(5,1) NOT NULL,
    "lRelaxedThigh" DECIMAL(5,1) NOT NULL,
    "lContractedThigh" DECIMAL(5,1) NOT NULL,
    "rRelaxedCalf" DECIMAL(5,1) NOT NULL,
    "rContractedCalf" DECIMAL(5,1) NOT NULL,
    "lRelaxedCalf" DECIMAL(5,1) NOT NULL,
    "lContractedCalf" DECIMAL(5,1) NOT NULL,
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvs01_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalEvs02" (
    "id" SERIAL NOT NULL,
    "totalBodyWater" DECIMAL(5,1) NOT NULL,
    "proteins" DECIMAL(5,1) NOT NULL,
    "minerals" DECIMAL(5,1) NOT NULL,
    "bodyFatMass" DECIMAL(5,1) NOT NULL,
    "leanBodyMass" DECIMAL(5,1) NOT NULL,
    "fatFreeDough" DECIMAL(5,1) NOT NULL,
    "bony" DECIMAL(5,1) NOT NULL,
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvs02_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalEvs03" (
    "id" SERIAL NOT NULL,
    "weight" DECIMAL(5,1) NOT NULL,
    "skeletalMuscleMass" DECIMAL(5,1) NOT NULL,
    "bodyFatMass" DECIMAL(5,1) NOT NULL,
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvs03_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalEvs04" (
    "id" SERIAL NOT NULL,
    "bodyMassIndex" DECIMAL(5,1) NOT NULL,
    "bodyFatPercentage" DECIMAL(5,1) NOT NULL,
    "waistHipRatio" DECIMAL(5,1) NOT NULL,
    "basalMetabolicRate" DECIMAL(5,1) NOT NULL,
    "fitnessScore" INTEGER NOT NULL,
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvs04_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physicalEvs05" (
    "id" SERIAL NOT NULL,
    "bodyCompositionAnalysis" VARCHAR(255),
    "bodyFatPercentage" VARCHAR(255),
    "waistHipRatio" VARCHAR(255),
    "evaluationId" INTEGER NOT NULL,

    CONSTRAINT "physicalEvs05_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvsImages_evaluationId_key" ON "physicalEvsImages"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvs01_evaluationId_key" ON "physicalEvs01"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvs02_evaluationId_key" ON "physicalEvs02"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvs03_evaluationId_key" ON "physicalEvs03"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvs04_evaluationId_key" ON "physicalEvs04"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "physicalEvs05_evaluationId_key" ON "physicalEvs05"("evaluationId");

-- AddForeignKey
ALTER TABLE "physicalEvsImages" ADD CONSTRAINT "physicalEvsImages_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalEvs01" ADD CONSTRAINT "physicalEvs01_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalEvs02" ADD CONSTRAINT "physicalEvs02_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalEvs03" ADD CONSTRAINT "physicalEvs03_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalEvs04" ADD CONSTRAINT "physicalEvs04_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalEvs05" ADD CONSTRAINT "physicalEvs05_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
