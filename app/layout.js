import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "MacBory Tech",
  description: "Servicios informáticos al alcance de todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={karla.className}>{children}</body>
    </html>
  );
}
