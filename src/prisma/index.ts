import { PrismaClient } from "@prisma/client";

// type Request = {
//   method: string;
// };

// type Star = {
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//   name: string;
//   constellation: string;
// };

// type prismaResponse<T> = {
//   status: number;
//   message: string;
//   item?: T[];
// };

export const PlanetScale = async () => {
  const prisma = new PrismaClient();
  const test = await prisma.star.findMany();
  console.log(test);
  // try {
  //   const response = await assetHandler({ method: "GET" });
  //   await prisma.$disconnect;
  //   return { status: 200, item: response, message: "Success!" };
  // } catch (error) {
  //   await prisma.$disconnect;
  //   return { status: 500, message: "Error!!" };
  // }
};

// const assetHandler = async (request: Request) => {
//   const { method } = request;

//   return await prisma.star.findMany();
// };
