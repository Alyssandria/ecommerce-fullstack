import { Navigation } from "@/components/Navigation";
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: "400",
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
        className={`${poppins.className} antialiased`}
      >
        <div className="app-wrapper p-4">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
