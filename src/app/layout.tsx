import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/context/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer portfolio by Åsmund Danielsen Kvitvang',
  description: 'Developer portfolio by Åsmund Danielsen Kvitvang showing his blog, projects and background.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`flex flex-col min-h-screen ${inter.className}`}>
                <Providers>
                    <Header/>
                    <div className="flex-grow">
                        <div className='flex items-center justify-center p-4'>
                            {children}
                            <Analytics />
                        </div>
                    </div>
                    <Footer/>
                </Providers>
            </body>
        </html>
  )
}
