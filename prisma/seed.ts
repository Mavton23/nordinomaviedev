import { PrismaClient } from '@/lib/generated/prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('0115183aBC$', 12);

  await prisma.user.upsert({
    where: { email: 'nordinomavie@gmail.com' },
    update: {},
    create: {
      email: 'nordinomavie@gmail.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Usuário admin criado: nordinomavie@gmail.com / 0115183aBC$');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });