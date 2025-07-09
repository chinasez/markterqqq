import { NextResponse } from "next/server";

export function handlePrismaError(error) {
  if (error.code === 'P2002') {
    return NextResponse.json(
      { error: 'Duplicate field value' },
      { status: 400 }
    );
  }

  if (error instanceof Error && error.message) {
    return NextResponse.json(
      { error: 'Validation error: ' + error.message },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}