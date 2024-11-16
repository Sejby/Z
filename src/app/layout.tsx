import "./globals.css";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import Header from "@/components/layout/header";

export const metadata = {
  title: "NoSQL Project",
};

// Definujeme layout jako serverovou komponentu
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Načteme session na straně serveru
  return (
    <html lang="en">
      <body className={"text-zinc-900 bg-white antialiased min-h-screen"}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
