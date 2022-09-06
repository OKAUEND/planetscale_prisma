import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Request = {
  method: string;
};

type Star = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  constellation: string;
};

type prismaResponse<T> = {
  status: number;
  message: string;
  item?: T[];
};

const assetHandler = async (request: Request) => {
  const { method } = request;

  return await prisma.star.findMany();
};

export const PlanetScale = async (): psscale | Error => {
  try {
    const response = await assetHandler({ method: "GET" });
    await prisma.$disconnect;
    return { status: 200, response };
  } catch (error) {
    await prisma.$disconnect;
    return { status: 500, message: "Error!!" };
  }
};
