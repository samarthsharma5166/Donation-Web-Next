import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request,{ params }: { params:  Promise<{ file: string }>} ) {
  try {
    const {file} = await params;
    const fileName = file;
    const filePath = path.join("/var/www/invoice", fileName);

    try {
      await fs.access(filePath); // check if file exists
    } catch {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer, {
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
