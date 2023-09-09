import Link from "next/link"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Link
                style={{
                    position: "fixed",
                    top: "5px",
                    left: "5px",
                    padding: "5px",
                    border: "3px solid white",
                    borderRadius: "5px",
                    backgroundColor: "#574AE8",
                    color: "white",
                }}
                href="/"
            >
                Voltar
            </Link>
        </>
    )
}

