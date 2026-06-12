-- AlterTable
ALTER TABLE `quarto` MODIFY `numero` VARCHAR(191) NOT NULL,
    MODIFY `tipo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `reserva` MODIFY `hospede` VARCHAR(191) NOT NULL,
    MODIFY `data_entrada` DATETIME(3) NOT NULL,
    MODIFY `data_saida` DATETIME(3) NOT NULL;
