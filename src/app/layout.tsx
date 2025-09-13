import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";

import "./globals.scss";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata: Metadata = {
  title: "Карточки товаров | Главная",
  description: "Тестовый сайт с возможностью изменения контетна через админ панель",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "",
  robots: "noyaca",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    images: {
      url: ""
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
          {children}
      </body>
    </html>
  );
}
