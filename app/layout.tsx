import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import {
  dark,
  neobrutalism,
  shadesOfPurple,
  unstable_createTheme,
} from "@clerk/themes";
const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classic Fashion Wears",
  description: "Online store for classic fashion wears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" className="scroll-smooth">
        <body className={`${raleway.className}  `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster position="bottom-left" />
        </body>
      </html>
    </ClerkProvider>
  );
}
