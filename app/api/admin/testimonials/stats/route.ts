import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  try {
    const [total, approved, featured] = await Promise.all([
      prisma.testimonial.count(),
      prisma.testimonial.count({ where: { approved: true } }),
      prisma.testimonial.count({ where: { featured: true } }),
    ]);

    const pending = total - approved;

    return NextResponse.json({
      total,
      approved,
      pending,
      featured,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar estatísticas' },
      { status: 500 }
    );
  }
}