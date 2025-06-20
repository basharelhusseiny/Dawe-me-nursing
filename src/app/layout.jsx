import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const cairo = Cairo({
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "داوي Me | رعاية طبية منزلية محترفة",
  description:
    "داوي Me هو فريق طبي متخصص يقدم خدمات رعاية صحية منزلية شاملة على يد أطباء وممرضين محترفين. نهدف لتقديم خدمة آمنة، إنسانية، وموثوقة داخل منزلك، لتضمن راحة وسلامة أسرتك في كل خطوة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${cairo.className} antialiased min-h-screen flex flex-col`}
      >
        <MobileMenuProvider>
          <Header />
          <main className="flex-grow mt-[71px]">{children}</main>
          <Footer />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
