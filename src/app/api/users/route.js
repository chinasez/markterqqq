import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Секрет для подписи JWT (должен быть в .env)
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, firstName, lastName } = body;

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: 'Все поля обязательны' }, { status: 400 });
    }

    
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Пользователь уже существует' }, { status: 409 });
    }

    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');


    const newUser = await prisma.users.create({
      data: {
        email,
        password: passwordHash,
        firstName,
        lastName,
      },
    });


    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );


    return NextResponse.json(
      { message: 'Пользователь создан', token, user: newUser },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}