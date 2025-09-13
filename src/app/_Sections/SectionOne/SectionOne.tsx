import Link from "next/link";

import { Section } from "@prisma/client";

import "./SectionOne.scss"

interface Props {
  styledClass: string,
  section: Section
}

export default function SectionOne({ styledClass, section } : Props) {
  return (
    <section className={styledClass}>
        <h1 className={`${styledClass}__h1`}>{section.title}</h1>
        <Link href="/admin-panel">Админка</Link>
    </section>
  )
}
