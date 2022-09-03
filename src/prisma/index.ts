import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Request = {
  method: string;
};

const assetHandler = async (request: Request) => {
  const { method } = request;

  return await prisma.star.findMany();
};

export const PlanetScale = async () => {
  try {
    const response = await assetHandler({ method: "GET" });
    await prisma.$disconnect;
    return response;
  } catch (error) {
    await prisma.$disconnect;
    return { status: 500, message: "Error!!" };
  }
};
