import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Request = {
  method: string;
};

type psscale = {
  status: number;
  Star: [
    {
      id: number;
      createdAt: Date;
      updatedAt: Date;
      name: string;
      constellation: string;
    }
  ];
};

type Error = {
  status: number;
  message: string;
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
