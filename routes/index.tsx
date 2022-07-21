/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import TechCarousel from "../components/TechCarousel.tsx";
import GeneralLayout from "../components/layout/general_layout.tsx";
import Link from "../components/utils/link.tsx";
import ExternalLink from "../components/utils/externallink.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

const Head = () => (
    <head>
        <title>Home - Zackary's Portfolio</title>
        <meta type="description" content="Zackary Santana's custom portfolio!" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Josefin+Sans%3A700%2C400%2C100%7CTitillium+Web%3A400%2C700%2C400italic%2C700italic" type="text/css" media="all" />
    </head>
);

export default function Home() {
    return (
        <GeneralLayout activePath="/" head={<Head />}>
            <main className={tw`pt-10 px-10 flex flex-col items-center text-center`}>
                <h1 className={tw`sm:text-[5rem] text-[3rem] font-thin uppercase font-josefin`}>Zackary Santana</h1>
                <p className={tw`my-6 uppercase font-josefin font-bold tracking-[0.125em]`}>A creative full-stack web developer</p>
                <TechCarousel />
                <div className={tw`sm:w-[30rem] my-8 w-full`}>
                    <p>
                        Interested in my work? Head over to my <Link to="/projects">my projects</Link> to find out more. I am a passionate developer that has worked with many different languages and frameworks (the carousel does not include everything that makes me great, check out my <ExternalLink to="/Zackary_Santana_Resume.pdf" className={tw`text-blue-400`}>resume</ExternalLink>)
                    </p>
                </div>
                <div className={tw`flex flex-wrap justify-center p-5`}>
                    {getProjects().map(p => (
                        <ProjectCard img={p.img} title={p.title} techs={p.techs} desc={p.desc} sub={p.sub} special={p.special} />
                    ))}
                </div>
            </main>
        </GeneralLayout>
    );
}

function getProjects() {
    return [
        {
            img: "logo.svg",
            title: "Space Frontier FAKE",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<>4<sup>m</sup></>, "read"],
                ["32", "comments"],
                ["5213", "views"],
            ],
        },
        {
            img: "logo.svg",
            title: "Space Frontier",
            techs: "Java, JavaFX, FXML",
            desc: "Space Frontier is a side scrolling Java game. It has multiple worlds and progession for enemies and players.",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/SpaceFrontier" className={tw`text-blue-400`}>Source</ExternalLink>],
                ["2400+", "lines"],
            ],
        },
        {
            img: "logo.svg",
            title: "Todo",
            techs: "Svelte, Firebase, Workbox",
            desc: <>This todo app is a PWA (Progressive Web App) made in <span className={tw`text-orange`}>Svelte</span> using <span className={tw`text-orange`}>Firebase</span> for authentication. </>,
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/To-do" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="https://todo.zackaryjamessantana.com/" className={tw`text-blue-400`}>Demo</ExternalLink>],
            ],
            special: "true"
        },
        {
            img: "logo.svg",
            title: "Tile Game",
            techs: "React, Redux, SASS",
            desc: "Did you ever play a tile matching game as a kid? This game is an animated online version of the childhood game! It's built using React and Redux.",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/TileGame" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="TBA" className={tw`text-blue-400`}>Demo</ExternalLink>],
            ],
            special: "true"
        },
        {
            img: "logo.svg",
            title: "Animal Collector",
            techs: "React, Redux, SASS",
            desc: "Cookie Clicker is a very popular game, have you ever thought what Cookie Clicker might be if it was built with React and centered around animals?",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/AnimalCollector" className={tw`text-blue-400`}>Source</ExternalLink>],
                [<ExternalLink to="TBA" className={tw`text-blue-400`}>Demo</ExternalLink>],
            ],
            special: "true"
        },
        {
            img: "logo.svg",
            title: "Selector",
            techs: "Java, JavaFX, FXML",
            desc: "A MVC custom system written with JavaFX. Using it, I made a To Do application as an example usage!",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/Selector_java" className={tw`text-blue-400`}>Source</ExternalLink>],
                ["1700+", "lines"],
            ],
        },
        {
            img: "logo.svg",
            title: "Portfolio",
            techs: "Fresh, Preact, Twind, Fly",
            desc: "This site is a responsive open-source web application made using Preact, Twind, and Fresh. ",
            sub: [
                [<ExternalLink to="https://github.com/ZackarySantana/Portfolio" className={tw`text-blue-400`}>Source</ExternalLink>],
                ["1400+", "lines"],
            ],
            special: "true"
        },
        {
            img: "logo.svg",
            title: "UPE",
            techs: "Remix, React, Express",
            desc: "A site with a multi-user authentication system, metrics with Prometheus, visualization with Grafana, Prisma ORM for posts/comments, and more!",
            sub: [
                [<ExternalLink to="/" className={tw`text-blue-400`}>Production</ExternalLink>],
                ["9500+", "lines"],
            ],
            special: "true"
        },
    ];
}