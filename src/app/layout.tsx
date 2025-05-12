import Navbar from "@/component/navbar/Navbar";
import { Roboto, Space_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/component/footer/Footer";
import LetsTalk from "./homesection/LetsTalk";
import Map from "./homesection/Map";
import ProviderWrapper from "./ProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-spacemono",
  weight: "400",
});

// export const metadata = {
//   title: "Chartered Management",
// };

export const metadata = {
  // generator: "Chartered Management",
  // applicationName: "",
  title: "Account Management",
  description:
    "Managing VAT and TAX documentation can be complicated and time-consuming — but it doesn't have to be. Our VAT/TAX Filing Documentation System is designed to make your tax processes seamless, accurate, and fully compliant with local regulations.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Chartered Management",
    "Chartered Accountant",
    "Portfolio Manager",
    "Bidur Dhungana",
  ],
  authors: [{ name: "Codequant", url: "https://codequant.io" }],
  creator: "Codequant",
  // publisher: "Sebastian Markbåge",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${roboto.variable}`}
    >
      <head>
        {/* <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
          defer
        ></script> */}
      </head>
      <body
        className={`${inter.className}`}
        style={{ background: "#fff", height: "100%" }}
      >
        <ProviderWrapper>
          <Navbar />
          {children}
          <LetsTalk />
          <Map />
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
