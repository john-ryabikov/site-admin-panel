"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string
}

export default function AsideLink({ href } : Props) {

  const pathname = usePathname()

  return (
    <Link href={href} className={`cms-page__aside-nav-tab ${pathname === href && "active-tab"}`}>
        <img src="/img/AdminPage/tab-icon.svg" alt="Block" />
        <span>Секция №1</span>
    </Link>
  )
}
