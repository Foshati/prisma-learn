import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Lexend } from "next/font/google";
import { Footer, Navbar } from "@/components/layout";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={lexend.className}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className=" flex flex-col  min-h-screen">
              <Navbar />
              <main className="flex-1"> {children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
