"use client";
import { Suspense } from "react";
import "./globals.css";
import "animate.css";
import { ThemeProvider } from "@material-tailwind/react";
import NavbarLayout from "../components/layout/NavbarLayout";
import Footer from "../components/layout/Footer";
import ScrollTop from "../components/layout/ScrollTop";
import Loading from "./loading";
import { ReduxProvider } from "../redux/provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f8fafc" }}>
        <ReduxProvider>
          <ThemeProvider>
            <NavbarLayout />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <ScrollTop />
            <a href="https://t.me/Cook_The_Code" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
              {/* Telegram link with your username */}
              <img src="/telegram.png" alt="Telegram" style={{ height: "90px", transition: "transform 0.3s ease-in-out" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              {/* Use your Telegram icon or any other visual */}
            </a>
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
