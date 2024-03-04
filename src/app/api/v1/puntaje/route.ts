import clientPromise from "@/libs/mongodb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const auth = req.headers.get("authorization");

    if (auth === process.env.BEARER_TOKEN) {
      const client = await clientPromise;
      const db = client.db("pokemon");
      const puntaje = await db.collection("puntaje").find().toArray();

      return Response.json({ code: 200, puntaje }, { status: 200 });
    } else {
      return Response.json(
        { code: 403, error: "no-authorized" },
        { status: 403 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get("authorization");
    const data = await req.json();

    if (auth === process.env.BEARER_TOKEN) {
      const client = await clientPromise;
      const db = client.db("pokemon");

      const created_puntaje = await db
        .collection("puntaje")
        .insertOne({ nombre: data.nombre, puntaje: data.puntaje });

      return Response.json(
        { code: 201, creado: created_puntaje.acknowledged },
        { status: 201 }
      );
    } else {
      return Response.json(
        { code: 403, error: "no-authorized" },
        { status: 403 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}
