"use client"
import { Inter } from "next/font/google";
import { useReducer } from "react";
import appReducer from "@/statemanagement/appReducer";
import { init } from "@/statemanagement/init";
import { Provider } from "@/statemanagement/appContext";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const [state,dispatch] = useReducer(appReducer,init)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={{state,dispatch}}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
