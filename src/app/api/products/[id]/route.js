import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function PUT(req, { params }) {
  const id = parseInt(params.id);

  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const description = formData.get("description");
    const price = formData.get("price");
    const file = formData.get("image");

    if (!title || !slug || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let imagePath = null;

    if (file && typeof file === "object" && file.arrayBuffer) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");

      await writeFile(path.join(uploadDir, filename), buffer);
      imagePath =` /uploads/${filename}`;
    }

    const updated = await prisma.products.update({
      where: { id },
      data: {
        title,
        slug,
        description: description ?? null,
        price: parseFloat(price),
        image: imagePath,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Update failed", details: error.message }, { status: 500 });
  }
}


export async function PATCH(req, { params }) {
  const id = parseInt(params.id);

  try {
    const body = await req.json();

    const data = {};
    if (body.price !== undefined) data.price = parseFloat(body.price);
    if (body.title !== undefined) data.title = body.title;
    if (body.description !== undefined) data.description = body.description;


    const updated = await prisma.products.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Update failed", details: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(req, { params }) {
  const id = parseInt(params.id);

  try {
    await prisma.products.delete({ where: { id } });
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Delete failed", details: error.message },
      { status: 500 }
    );
  }
}