import { prisma } from "@/utils/prisma-client"

export const updateSectionTitle = async (id: number, title: string) => {
    return prisma.section.update({
        where: { id },
        data: { title }
    })
}