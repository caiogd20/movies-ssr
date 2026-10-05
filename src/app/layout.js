import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Movies SSR | Next.js + TMDB",
    description:
        "Movie browser built with Next.js and server-side rendering, powered by the TMDB API.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="pt-br"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
