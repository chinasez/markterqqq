import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function PUT(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { itemId, quantity } = await request.json();

    const cartItem = await prisma.cart_items.findUnique({
      where: { id: Number(itemId) },
      include: { cart: true }
    });

    if (!cartItem || cartItem.cart.user_id !== decoded.id) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }


    const updatedItem = await prisma.cart_items.update({
      where: { id: Number(itemId) },
      data: { quantity: Number(quantity) },
      include: { product: true }
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating cart item:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}