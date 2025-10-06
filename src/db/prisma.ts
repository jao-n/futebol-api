import { PrismaClient } from "@prisma/client";

// Cria uma única instância do Prisma Client para toda a aplicação
// Isso é importante para evitar múltiplas conexões com o banco
const prisma = new PrismaClient();

// Exporta a instância do Prisma para ser usada em outros arquivos
export default prisma;