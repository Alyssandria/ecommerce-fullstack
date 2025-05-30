import { Navigation } from "@/components/Navigation";
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="app-wrapper p-4">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
