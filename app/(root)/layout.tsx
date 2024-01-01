"use client";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="wrapper flex-1">{children}</main>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}
