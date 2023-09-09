import Link from "next/link"

import desafios from "./desafios"

export default function Home() {
    const style = {
        container: "container mx-auto px-3 text-2xl",
        header: {
            container: "flex flex-col mb-10 items-center gap-4 justify-center h-80 border-b-2 shadow-b-2xl",
            title: "text-4xl font-bold",
            about: "text-xl lg:w-1/2",
        },
        main: {
            titleSection: "flex text-2xl pb-3 font-bold",
            challenges: {
                container: "grid grid-cols-1 lg:grid-cols-3 flex text-xl w-full",
                card: {
                    container: "border-2 w-full p-3 rounded-2xl shadow-2xl hover:bg-gray-200",
                    img: "w-full mb-5",
                    title: "text-2xl font-bold",
                    description: "w-full",
                }
            }
        },
        footer: {
            section: "text-4xl font-bold",
            about: "text-xl lg:w-1/2",
        }
    }

    return <>
        <div className={style.container}>
            <header className={style.header.container}>
                <h1 className={style.header.title}>Desafios Codelândia</h1>
                <p className={style.header.about}>
                    Codelândia é uma comunidade que te ajuda a aprender mais por meio de desafios. Basicamente em um período de tempo é lançado um desafio e você faz esse desafio para aprendizado com a tecnologia que quiser.
                </p>
            </header>
            <main>
                <section>
                    <h2 className={style.main.titleSection}>Desafios</h2>
                    <ul className={style.main.challenges.container}>
                        {
                            desafios.map(desafio => <li
                                className="w-full"
                                key={desafio.path}
                            >
                                <Link href={desafio.path}>
                                    <section
                                        className={style.main.challenges.card.container}
                                    >
                                        <img
                                            src={desafio.img}
                                            alt={desafio.title}
                                            className={style.main.challenges.card.img}
                                        />
                                        <h2
                                            className={style.main.challenges.card.title}
                                        >
                                            {desafio.title}
                                        </h2>
                                        <p
                                            className={style.main.challenges.card.description}
                                        >
                                            {desafio.description}
                                        </p>
                                    </section>
                                </Link>
                            </li>
                            )
                        }
                    </ul>
                </section>
            </main>
            <footer></footer>
        </div>
    </>
}
