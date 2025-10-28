import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

// Force Node runtime (important for fs operations)
export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  try {
    const { file } = await params;
    const fileName = file;
    const filePath = path.join("/var/www/invoice", fileName);

    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // ✅ Convert Buffer -> Uint8Array (valid BodyInit type)
    const fileBuffer = await fs.readFile(filePath);
    const uint8Array = new Uint8Array(fileBuffer);

    return new NextResponse(uint8Array, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (err) {
    console.error("Download invoice error:", err);
    return NextResponse.json({ error: "Error reading file" }, { status: 500 });
  }
}
