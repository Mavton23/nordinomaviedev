import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ],
      select: {
        id: true,
        name: true,
        email: true,
        rating: true,
        content: true,
        company: true,
        position: true,
        featured: true,
        createdAt: true
      }
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.log("Erro: ", error)
    return NextResponse.json(
      { error: 'Erro ao buscar testemunhos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, rating, content, company, position } = await request.json();

    // Validação básica
    if (!name || !email || !rating || !content) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Avaliação deve ser entre 1 e 5 estrelas' },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        email,
        rating,
        content,
        company: company || null,
        position: position || null,
        approved: false,
        featured: false
      }
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}