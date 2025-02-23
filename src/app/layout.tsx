import type { Metadata } from "next";
import './styles/globals.css';

export const metadata: Metadata = {
  title: "toomuchtodo",
  description: "Crie tarefas e metas a serem cumpridas com toomuchtodo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
