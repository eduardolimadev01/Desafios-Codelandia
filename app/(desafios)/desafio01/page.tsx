import "./style.sass"

export default function Desafio01() {
    let listPosts = [
        {
            id: "1",
            data: "02 de jul, 2021",
            title: "Agora é oficial: o Windows 11 está vindo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
        },
        {
            id: "2",
            data: "02 de jul, 2021",
            title: "Tim Berners-Lee vai leiloar código-fonte da web",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
        },
        {
            id: "3",
            data: "02 de jul, 2021",
            title: "Tem Firefox novo no pedaço e você vai querer migrar",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
        },
        {
            id: "4",
            data: "02 de jul, 2021",
            title: "John McAfee, criador do antivírus McAfee, morre",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
        }
    ]

    return <>
        <header>
            <section>
                <nav>
                    <h1 className="logo">Codelândia</h1>
                    <a className="blog">blog</a>
                </nav>
                <div className="input-container">
                    <label htmlFor="search">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6484 25.0342L19.04 17.4258C20.2207 15.8994 20.8594 14.0332 20.8594 12.0703C20.8594 9.7207 19.9424 7.51758 18.2842 5.85645C16.626 4.19531 14.417 3.28125 12.0703 3.28125C9.72363 3.28125 7.51465 4.19824 5.85645 5.85645C4.19531 7.51465 3.28125 9.7207 3.28125 12.0703C3.28125 14.417 4.19824 16.626 5.85645 18.2842C7.51465 19.9453 9.7207 20.8594 12.0703 20.8594C14.0332 20.8594 15.8965 20.2207 17.4229 19.043L25.0313 26.6484C25.0536 26.6708 25.08 26.6885 25.1092 26.7006C25.1384 26.7126 25.1696 26.7189 25.2012 26.7189C25.2327 26.7189 25.264 26.7126 25.2931 26.7006C25.3223 26.6885 25.3488 26.6708 25.3711 26.6484L26.6484 25.374C26.6708 25.3517 26.6885 25.3252 26.7006 25.2961C26.7126 25.2669 26.7189 25.2357 26.7189 25.2041C26.7189 25.1725 26.7126 25.1413 26.7006 25.1121C26.6885 25.083 26.6708 25.0565 26.6484 25.0342ZM16.7109 16.7109C15.4688 17.9502 13.8223 18.6328 12.0703 18.6328C10.3184 18.6328 8.67188 17.9502 7.42969 16.7109C6.19043 15.4688 5.50781 13.8223 5.50781 12.0703C5.50781 10.3184 6.19043 8.66895 7.42969 7.42969C8.67188 6.19043 10.3184 5.50781 12.0703 5.50781C13.8223 5.50781 15.4717 6.1875 16.7109 7.42969C17.9502 8.67188 18.6328 10.3184 18.6328 12.0703C18.6328 13.8223 17.9502 15.4717 16.7109 16.7109Z" fill="white" />
                        </svg>
                    </label>
                    <input
                        id="search"
                        className="search"
                        placeholder="Pesquisar no blog"
                        type="text"
                    />
                </div>
            </section>
        </header>
        <main>
            <ul className="lists-posts">
                {listPosts.map(post => <li
                    className="container-post"
                    key={post.id}
                >
                    <section>
                        <h3 className="date">{post.data}</h3>
                        <h2 className="title">{post.title}</h2>
                        <p className="description">{post.description}</p>
                    </section>
                </li>
                )}
            </ul>
        </main>
    </>
}

