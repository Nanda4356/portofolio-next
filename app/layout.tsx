import "@/styles/globals.css";
import clsx from "clsx";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
