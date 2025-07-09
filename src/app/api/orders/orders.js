import { handlePrismaError } from '@/lib/handlePrismaError';
import { requireAuth } from '@/lib/requireAuth';
import prisma from '@/lib/prisma';
import { allowMethods } from '@/lib/allowMethods';

async function handleLogin(e) {
    e.preventDefault();
    const email = 'test@example.com';
    const password = '1234567';
    try {
        const user = await signIn(email, password);
        console.log('Logged in:', user);
    } catch (error) {
        console.error('Login error:', error.message);
    }
}



async function handler(req, res) {
    const userId = req.user.id;
    try {
        if (req.method === "GET") {
            const orders = await prisma.orders.findMany({
                where: { user_id: userId},
                include: {
                    order_items: {
                        include: {
                            products: true,
                        },
                    },
                }
            });
            return res.json(orders);
        }
    
        if (req.method === "POST") {
            const { items } = req.body;
        
            if (!user_id || typeof user_id !== 'string') 
                return res.status(400).json({ error: 'user_id is required and must be a string'});
        
            if (!Array.isArray(items) || items.length === 0)
                return res.status(400).json({error: 'items must be a non-empty array'});
        
            for (const item of items) {
                
                if (typeof item.product_id !== 'number')
                    return res.status(400).json({ error: 'product_id must be a number'});
            
                if (typeof item.quantity !== 'number' || item.quantity <= 0)
                    return res.status(400).json({ error: 'quantity must be a positive number' })
            }
        
            const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        
            const newOrder = await prisma.orders.create({
                data: {
                    user_id: userId,
                    total_price: totalPrice,
                    order_items: {
                        create: items.map((item) => ({
                            product_id: item.product_id,
                            quantity: item.quantity,
                        })),
                    },
                },
                include: { order_items: true },
            });
            return res.status(201).json(newOrder);
        }
    
        res.status(405).end();
    } catch (error) {
        return handlePrismaError(error, res);
    }
}

export default requireAuth(allowMethods(['GET', 'POST'])(handler));
