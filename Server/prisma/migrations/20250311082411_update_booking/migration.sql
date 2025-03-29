-- AlterTable
ALTER TABLE `camping` MODIFY `description` VARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalNights` INTEGER NOT NULL,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `total` INTEGER NOT NULL,
    `paymentStatus` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `campingId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_campingId_fkey` FOREIGN KEY (`campingId`) REFERENCES `Camping`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
