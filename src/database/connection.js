import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default prisma;

// comando para ejecutar el proyecto
// npx prisma migrate dev --name init
// npx prisma generate
// npx prisma studio : para ver la base de datos
