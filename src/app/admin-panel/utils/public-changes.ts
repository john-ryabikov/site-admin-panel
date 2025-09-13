"use server"

import { revalidatePath } from 'next/cache'
import { prisma } from "@/utils/prisma-client"

const updateSectionTitle = async (id: number, title: string) => {
    return prisma.section.update({
        where: { id },
        data: { title }
    })
}

export const publicChanges = async (sectionId : number, data: FormData) => {
    await updateSectionTitle(sectionId, data.get("section_title") as string)
    revalidatePath("/")
}