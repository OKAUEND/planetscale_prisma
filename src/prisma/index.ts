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
  assetHandler({ method: "GET" }).then(async () => {});
};
