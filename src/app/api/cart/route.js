import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return NextResponse.json({ error: 'Неверный токен' }, { status: 401 });
    }

    const cart = await prisma.cart.findUnique({
      where: { user_id: decoded.id },
      include: {
        cart_items: {
          include: {
            product: true
          }
        }
      }
    });

    return NextResponse.json(cart || { cart_items: [] });
  } catch (error) {
    console.error('Ошибка получения корзины:', error);
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}