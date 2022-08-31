import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Request = {
  method: string;
};

export const assetHandler = async (request: Request, response) => {
  const { method } = request;

  switch (method) {
    case "GET":
      const response = await prisma.star.findMany();
  }
};
