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

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs01Id_fkey" FOREIGN KEY ("functEvs01Id") REFERENCES "functEvs01"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs02Id_fkey" FOREIGN KEY ("functEvs02Id") REFERENCES "functEvs02"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs03Id_fkey" FOREIGN KEY ("functEvs03Id") REFERENCES "functEvs03"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs04Id_fkey" FOREIGN KEY ("functEvs04Id") REFERENCES "functEvs04"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs05Id_fkey" FOREIGN KEY ("functEvs05Id") REFERENCES "functEvs05"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs06Id_fkey" FOREIGN KEY ("functEvs06Id") REFERENCES "functEvs06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs07Id_fkey" FOREIGN KEY ("functEvs07Id") REFERENCES "functEvs07"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "functionalEvaluations" ADD CONSTRAINT "functionalEvaluations_functEvs08Id_fkey" FOREIGN KEY ("functEvs08Id") REFERENCES "functEvs08"("id") ON DELETE CASCADE ON UPDATE CASCADE;
