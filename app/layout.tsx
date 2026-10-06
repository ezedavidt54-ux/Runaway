import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "RUNAWAY", description: "RUNAWAY. Move different." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }