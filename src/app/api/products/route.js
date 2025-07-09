import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs/promises";


export async function GET() {
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({error: 'Ошибка получения продуктов', details: error.message}, {status:500});
  }
}


export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const description = formData.get("description") || null;
    const price = formData.get("price");
    const file = formData.get("image");

    const validations = [
      {
        valid: title && typeof title === "string",
        error: "Title is required and must be a string",
      },
      {
        valid: slug && typeof slug === "string",
        error: "Slug is required and must be a string",
      },
      {
        valid: price && !isNaN(parseFloat(price)),
        error: "Price is required and must be a number",
      },
    ];

    for (const check of validations) {
      if (!check.valid) {
        return NextResponse.json({ error: check.error }, { status: 400 });
      }
    }


    let imagePath = null;
    if (file && typeof file === "object") {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.join(process.cwd(), "public", "uploads");

      await fs.mkdir(uploadDir, { recursive: true });

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.writeFile(filePath, buffer);
      imagePath = `/uploads/${fileName}`;
    }


    const product = await prisma.products.create({
      data: {
        title,
        slug,
        description,
        price: parseFloat(price),
        image: imagePath,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка создания", details: error.message },
      { status: 500 }
    );
  }
}