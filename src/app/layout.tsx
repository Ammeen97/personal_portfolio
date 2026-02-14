import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const neueMachina = localFont({
    src: [
        {
            path: '../assets/fonts/Neue-Machina/PPNeueMachina-PlainRegular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Neue-Machina/PPNeueMachina-PlainUltrabold.otf',
            weight: '500',
            style: 'normal',
        }
    ],
    variable: '--font-neue-machina'
})

const gallery = localFont({
    src: [
        { path: '../assets/fonts/Gallery/gallery-regular.otf', weight: '400', style: 'normal' },
    ],
    variable: '--font-gallery'
})

export const metadata: Metadata = {
    title: 'Amine Ben Faiza — Brand & Social Media Designer',
    description: 'Brand designer specializing in visual identity and social media design for startups, eco-friendly brands, and tech companies. Based in Tunisia, working globally.',
    keywords: ['Brand Designer', 'Visual Identity', 'Social Media Design', 'Tunisia', 'Graphic Designer', 'Startups', 'Sustainable Design'],
    authors: [{ name: 'Amine Ben Faiza' }],
    openGraph: {
        title: 'Amine Ben Faiza — Brand Designer',
        description: 'Creating clear, consistent visual identities for startups and sustainable businesses.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Amine Ben Faiza — Brand Designer',
        description: 'Creating clear, consistent visual identities for startups and sustainable businesses.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${inter.className} ${neueMachina.variable} ${gallery.variable}`}>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
