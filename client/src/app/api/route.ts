import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    pokemon: {
      name: "꼬부기",
    },
  };
  return NextResponse.json({ data });
  //   const res = await fetch("http://localhost:8000/api/users");
  //   const data = await res.json();

  //   return NextResponse.json({ data });
}
