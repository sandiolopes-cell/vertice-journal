import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vértice Journal",
  description:
    "Portal jornalístico com matérias preparadas por inteligência artificial."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
