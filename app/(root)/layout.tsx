"use client";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeChanger } from "@/components/theme-provider/ThemeChanger";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="flex flex-col h-full relative">
          <Header />
          <main className="wrapper flex-1">
            <div className=" w-full flex justify-end fixed md:static top-20 right-0 sm:hidden ">
              <ThemeChanger />
            </div>
            {children}
          </main>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}
