import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { auth } from "@/utils/auth";

import LogoutButton from "./_components/LogoutButton/LogoutButton";
import AsideNav from "./_components/AsideNav/AsideNav";

import "./admin-panel.scss";

export default async function AdminPanelLayout({ children }: Readonly<{children: ReactNode}>) {

    const session = await auth()

    !session && redirect("/login")

    return (
      <main className="cms-page">
        {/* Боковое меню */}
        <aside className="cms-page__aside">
          <div className="cms-page__aside-panel">
            <div className="cms-page__aside-title">
              <img className="cms-page__aside-title-logo" src="/img/Logo/Logo-icon-Photoroom.png" alt="Logo"/>
              <div className="cms-page__aside-title-line"></div>
              <h1 className="cms-page__aside-title-h1">Панель управления</h1>
            </div>
            <AsideNav/>
          </div>
          <LogoutButton/>
        </aside>

        {/* Блок с данными */}
        {children}
      </main>
    );
  }