import { Section } from "@prisma/client"

export const getSections = async () => {
    
      const res = await fetch(`${process.env.BASE_URL}/api/items`, {
          headers: {'Access-Control-Allow-Origin':'*'},
          cache: 'no-store'
      })
    
      try {
            if (!res.ok) {
                  throw new Error("Connection is not OK")
            } else {
                  const sections = await res.json() as Section[]
                  return sections
            }
      } catch (error: any) {
            console.log(error.message)
      }
}
