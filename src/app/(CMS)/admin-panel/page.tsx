import { getSections } from "@/utils/get-sections"

import SectionEdit from "./_components/SectionEdit/SectionEdit"

export default async function AdminSection() {

    const sections = await getSections()

    return (
      <section className="cms-page__section">
        {sections ? (<SectionEdit section={sections[0]}/>) : (<p>Данные не загружены, обновите страницу</p>)}
      </section>
    )
}


