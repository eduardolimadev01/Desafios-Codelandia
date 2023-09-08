import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Desafios Codelandia',
    description: 'Desafios Codelandia',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className={inter.className}>
        {children}
    </div>
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}

