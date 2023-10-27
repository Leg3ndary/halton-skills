import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Halton Skills",
    description: "Made by Ben Z",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={publicSans.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
