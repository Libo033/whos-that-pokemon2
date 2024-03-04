import { NextRequest } from "next/server";

export function GET() {
  try {
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}

export function POST(req: NextRequest) {
  try {
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}
