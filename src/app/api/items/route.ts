import { prisma } from "@/utils/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_req : NextRequest) {

    try {

        const section = await prisma.section.findMany()

        if (!section) return NextResponse.json({ error: 'Ошибка загрузки данных' }, { status: 404 })

        return NextResponse.json(section)

    } catch (e: any) {
        console.error('Ошибка запроса:', e.message)
    } finally {
        await prisma.$disconnect()
    }
}
    
    