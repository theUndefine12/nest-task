/*
  Warnings:

  - You are about to drop the column `status` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "status",
ADD COLUMN     "isDone" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "Status";
