/*
  Warnings:

  - Added the required column `category` to the `Camping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `camping` ADD COLUMN `category` VARCHAR(191) NOT NULL;
