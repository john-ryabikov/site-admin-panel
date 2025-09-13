import { getSections } from "@/utils/get-sections";

import SectionOne from "./_Sections/SectionOne/SectionOne";

export default async function MainPage() {

  const sections = await getSections()

  return (
      <main className="main-page">
          {sections && <SectionOne styledClass="section-one" section={sections[0]}/>}
      </main>
    )
  }
