"use client";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="wrapper flex-1">{children}</main>
        <Footer />
      </div>
    </Provider>
  );
}
