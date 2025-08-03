import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  redirect("/hoho");
  return Response.json({
    headers: Object.fromEntries(request.headers.entries()),
  })
}