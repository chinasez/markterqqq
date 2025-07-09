import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import prisma from '@/lib/prisma'; 

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, firstName, lastName } = body;

    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
        return NextResponse.json({ error: 'Пользователь уже существует' }, { status: 409 });
    }
    const hashedPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return NextResponse.json({ message: 'Успешная регистрация', user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}