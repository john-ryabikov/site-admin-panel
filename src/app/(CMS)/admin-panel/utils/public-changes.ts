"use server"

import { revalidatePath } from 'next/cache'
import { prisma } from "@/utils/prisma-client"

const updateSectionTitle = async (id: number, title: string) => {
    try {
        const changedTitle = prisma.section.update({
            where: { id },
            data: { title }
        })
        return changedTitle
    } catch (e: any) {
        console.log(e.message)
    } finally {
        prisma.$disconnect
    }   
}

export const publicChangedTitle = async (sectionId : number, data: FormData) => {
    await updateSectionTitle(sectionId, data.get("section_title") as string)
    revalidatePath("/")
}