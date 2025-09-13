import { prisma } from "@/utils/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_req : NextRequest) {

    const section = await prisma.section.findMany()

    return NextResponse.json(section)
}
    
    