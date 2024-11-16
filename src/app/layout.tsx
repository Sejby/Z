import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import SessionProvider from "@/app/context/auth-context";

export const metadata: Metadata = {
  title: "NoSQL Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"text-zinc-900 bg-white antialiased min-h-screen"}>
        <SessionProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
