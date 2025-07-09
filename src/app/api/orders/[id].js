import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    const id = parseInt(req.query.id);

    if (req.method === "PUT") {
        const { status } = req.body; 
        try {
            const updated = prisma.orders.update({
                where: { id },
                data: { status },
            });
            return res.json(updated);
        } catch (error) {
            return res.status(500).json({error: 'Failed to update order'});
        }
    }

    if (req.method === 'DELETE') {
        try {
            await prisma.orders.delete({ where: { id }});
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({error: 'Failed to delete order'});
        }
    }
    return res.status(405).end();
}