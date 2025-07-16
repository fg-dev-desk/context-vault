import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "../components/auth/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IdeaVault - Marketplace de Prompts de IA",
  description: "Descubre, comparte y monetiza prompts para cineastas, programadores, marketers y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider defaultTheme="system">
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
