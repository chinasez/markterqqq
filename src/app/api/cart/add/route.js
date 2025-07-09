import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {

    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return NextResponse.json({ error: 'Неверный токен' }, { status: 401 });
    }


    const { productId } = await request.json();

    let cart = await prisma.cart.findUnique({
      where: { user_id: decoded.id },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          user_id: decoded.id,
        },
      });
    }


    const existingItem = await prisma.cart_items.findFirst({
      where: {
        cart_id: cart.id,
        product_id: productId,
      },
    });

    if (existingItem) {
      await prisma.cart_items.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + 1 },
      });
    } else {
      await prisma.cart_items.create({
        data: {
          cart_id: cart.id,
          product_id: productId,
          quantity: 1,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка добавления в корзину:', error);
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}