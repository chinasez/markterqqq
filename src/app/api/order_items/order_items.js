import { allowMethods } from '@/lib/allowMethods';
import { handlePrismaError } from '@/lib/handlePrismaError';
import prisma from '@/lib/prisma';

async function handler(req, res) {
    if (req.method === "GET") {
        try {
        const items = await prisma.order_items.findMany({
            include: {
                orders: true,
                products: true,
            },
        });
        return res.json(items);
    } catch (error) {
        handlePrismaError(error, res);
    }
        res.status(405).end();
    }
}

export default allowMethods(['GET'])(handler);