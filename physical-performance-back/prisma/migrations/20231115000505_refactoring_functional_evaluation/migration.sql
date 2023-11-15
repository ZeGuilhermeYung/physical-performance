-- CreateTable
CREATE TABLE "functionalEvaluations" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(15) NOT NULL,
    "patientId" INTEGER NOT NULL,
    "evOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "functEvs01Id" INTEGER,
    "functEvs02Id" INTEGER,
    "functEvs03Id" INTEGER,
    "functEvs04Id" INTEGER,
    "functEvs05Id" INTEGER,
    "functEvs06Id" INTEGER,
    "functEvs07Id" INTEGER,
    "functEvs08Id" INTEGER,

    CONSTRAINT "functionalEvaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs01" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml01" INTEGER NOT NULL,
    "imr01" INTEGER NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs01_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs02" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml02" INTEGER NOT NULL,
    "imr02" INTEGER NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs02_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs03" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml03" VARCHAR(10) NOT NULL,
    "imr03" VARCHAR(10) NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs03_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs04" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml04" INTEGER NOT NULL,
    "imr04" INTEGER NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs04_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs05" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml05dist" DECIMAL(5,1) NOT NULL,
    "imr05dist" DECIMAL(5,1) NOT NULL,
    "iml05ang" INTEGER NOT NULL,
    "imr05ang" INTEGER NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs05_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs06" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "iml06quad" DECIMAL(5,1) NOT NULL,
    "imr06quad" DECIMAL(5,1) NOT NULL,
    "iml06isqui" DECIMAL(5,1) NOT NULL,
    "imr06isqui" DECIMAL(5,1) NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs07" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "cmj07" INTEGER NOT NULL,
    "iml07sh" INTEGER NOT NULL,
    "imr07sh" INTEGER NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs07_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "functEvs08" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "cmj08" DECIMAL(5,1) NOT NULL,
    "sj08" DECIMAL(5,1) NOT NULL,
    "iml08cmjuni" DECIMAL(5,1) NOT NULL,
    "imr08cmjuni" DECIMAL(5,1) NOT NULL,
    "observation" VARCHAR(255),

    CONSTRAINT "functEvs08_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(80),
    "phone" VARCHAR(11),
    "photo" TEXT NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "birthdate" DATE NOT NULL,
    "domSm" VARCHAR(10) NOT NULL,
    "domIm" VARCHAR(10) NOT NULL,
    "sports" VARCHAR(255),
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs01Id_key" ON "functionalEvaluations"("functEvs01Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs02Id_key" ON "functionalEvaluations"("functEvs02Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs03Id_key" ON "functionalEvaluations"("functEvs03Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs04Id_key" ON "functionalEvaluations"("functEvs04Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs05Id_key" ON "functionalEvaluations"("functEvs05Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs06Id_key" ON "functionalEvaluations"("functEvs06Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs07Id_key" ON "functionalEvaluations"("functEvs07Id");

-- CreateIndex
CREATE UNIQUE INDEX "functionalEvaluations_functEvs08Id_key" ON "functionalEvaluations"("functEvs08Id");

-- CreateIndex
CREATE UNIQUE INDEX "patients_name_key" ON "patients"("name");

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs01Id_fkey" FOREIGN KEY ("functEvs01Id") REFERENCES "functEvs01"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs02Id_fkey" FOREIGN KEY ("functEvs02Id") REFERENCES "functEvs02"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs03Id_fkey" FOREIGN KEY ("functEvs03Id") REFERENCES "functEvs03"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs04Id_fkey" FOREIGN KEY ("functEvs04Id") REFERENCES "functEvs04"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs05Id_fkey" FOREIGN KEY ("functEvs05Id") REFERENCES "functEvs05"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs06Id_fkey" FOREIGN KEY ("functEvs06Id") REFERENCES "functEvs06"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs07Id_fkey" FOREIGN KEY ("functEvs07Id") REFERENCES "functEvs07"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs08Id_fkey" FOREIGN KEY ("functEvs08Id") REFERENCES "functEvs08"("id") ON DELETE SET NULL ON UPDATE CASCADE;
