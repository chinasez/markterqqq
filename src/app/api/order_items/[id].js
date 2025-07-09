import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    const id = parseInt(req.query.id);

    if (req.method === "PUT") {
        const { quantity } = req.body; 
        try {
            const updated = prisma.order_items.update({
                where: { id },
                data: { quantity },
            });
            return res.json(updated);
        } catch (error) {
            return res.status(500).json({error: 'Failed to update item'});
        }
    }

    if (req.method === 'DELETE') {
        try {
            await prisma.order_items.delete({ where: { id }});
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({error: 'Failed to delete item'});
        }
    }
    return res.status(405).end();
}