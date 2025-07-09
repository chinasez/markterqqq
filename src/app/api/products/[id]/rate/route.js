// /api/products/[id]/rate/route.js
import  prisma  from "@/lib/prisma";

export async function PUT(req, { params }) {
  const { rating } = await req.json(); 
  const id = Number(params.id);

  if (!rating || rating < 0 || rating > 5) {
    return new Response(JSON.stringify({ error: "Invalid rating" }), {
      status: 400,
    });
  }

  const updated = await prisma.products.update({
    where: { id },
    data: { rating },
  });

  return new Response(JSON.stringify(updated), { status: 200 });
}
