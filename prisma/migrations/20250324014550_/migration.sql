/*
  Warnings:

  - You are about to drop the column `code` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `isIndex` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `route` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `prompt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `ApiRoute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Asset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Component` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Config` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deployment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `llm_prompt_logs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `components` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ApiRoute" DROP CONSTRAINT "ApiRoute_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Config" DROP CONSTRAINT "Config_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Deployment" DROP CONSTRAINT "Deployment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Deployment" DROP CONSTRAINT "Deployment_userId_fkey";

-- DropForeignKey
ALTER TABLE "llm_prompt_logs" DROP CONSTRAINT "llm_prompt_logs_projectId_fkey";

-- DropIndex
DROP INDEX "Page_projectId_idx";

-- DropIndex
DROP INDEX "Page_projectId_route_key";

-- DropIndex
DROP INDEX "Project_userId_idx";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "code",
DROP COLUMN "createdAt",
DROP COLUMN "isIndex",
DROP COLUMN "route",
DROP COLUMN "updatedAt",
ADD COLUMN     "content" JSONB NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "prompt",
ADD COLUMN     "components" JSONB NOT NULL;

-- DropTable
DROP TABLE "ApiRoute";

-- DropTable
DROP TABLE "Asset";

-- DropTable
DROP TABLE "Component";

-- DropTable
DROP TABLE "Config";

-- DropTable
DROP TABLE "Deployment";

-- DropTable
DROP TABLE "llm_prompt_logs";

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
