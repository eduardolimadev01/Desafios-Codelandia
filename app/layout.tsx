import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Desafios Codelandia',
    description: 'Desafios Codelandia',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="icon" href="./favicon.svg" sizes="any" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

