/*
  Warnings:

  - A unique constraint covering the columns `[clerkid]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Profile_clerkid_key` ON `Profile`(`clerkid`);
