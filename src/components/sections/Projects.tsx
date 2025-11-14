import React from 'react';
import { Carousel, Card } from '../ui/visuals/AppleCardsCarousel';
import placeholderPhoto1 from '../../assets/placeholder1.avif';
import placeholderPhoto2 from '../../assets/placeholder2.avif';
import placeholderPhoto3 from '../../assets/placeholder3.avif';

type CardData = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

const cards: CardData[] = [
    {
        src: placeholderPhoto1,
        title: 'Employee Management - React + Spring',
        category: 'Enterprise',
        content: (
            <div className="text-app space-y-3">
                <p className="text-muted text-base">
                    HR-style CRUD with pagination/sorting, role-based access, board-game
                    sub-entities.
                </p>
                <ul className="text-muted list-disc pl-5 text-sm">
                    <li>React + TypeScript, Vite, Tailwind, nginx</li>
                    <li>
                        Spring Boot, REST, DTOs, H2/PG, Third party e-mail authentication, role
                        based authorization
                    </li>
                    <li>PostgreSQL, Docker Compose (CI-ready structure)</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-DelczBalazs"
                        className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow"
                    >
                        Repo
                    </a>
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://delczbalazs.github.io/DBalazs-portfolio"
                        className="bg-card text-app rounded-xl border border-black/10 px-4 py-2 font-medium shadow-sm dark:border-white/10"
                    >
                        Case study
                    </a>
                </div>
            </div>
        ),
    },
    {
        src: placeholderPhoto2,
        title: 'SolarWatch - React + Spring Boot',
        category: 'Full-stack',
        content: (
            <div className="text-app space-y-3">
                <p className="text-muted text-base">
                    Sunrise/sunset lookup with geocoding, JWT, Postgres, Dockerized dev.
                </p>
                <ul className="text-muted list-disc pl-5 text-sm">
                    <li>React + TypeScript, Vite, Tailwind</li>
                    <li>Spring Boot, REST, DTOs, H2/PG</li>
                    <li>CI-ready structure</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://github.com/CodecoolGlobal/solar-watch-MVP-java-DelczBalazs"
                        className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow"
                    >
                        Repo
                    </a>
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://delczbalazs.github.io/DBalazs-portfolio"
                        className="bg-card text-app rounded-xl border border-black/10 px-4 py-2 font-medium shadow-sm dark:border-white/10"
                    >
                        Live
                    </a>
                </div>
            </div>
        ),
    },
    {
        src: placeholderPhoto3,
        title: 'PresetCrate - VS Code Extension (COMING SOON)',
        category: 'DX / Tooling',
        content: (
            <div className="text-app space-y-3">
                <p className="text-muted text-base">
                    Opinionated snippet/prompt presets for faster day-to-day dev work.
                </p>
                <ul className="text-muted list-disc pl-5 text-sm">
                    <li>VS Code API, esbuild bundling</li>
                    <li>Typed store, export/import</li>
                    <li>DX-first documentation</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://delczbalazs.github.io/DBalazs-portfolio"
                        className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow"
                    >
                        Repo
                    </a>
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://delczbalazs.github.io/DBalazs-portfolio"
                        className="bg-card text-app rounded-xl border border-black/10 px-4 py-2 font-medium shadow-sm dark:border-white/10"
                    >
                        Marketplace
                    </a>
                </div>
            </div>
        ),
    },
];

export const Projects = () => {
    const items = cards.map((card, i) => <Card key={card.title} card={card} index={i} layout />);

    return (
        <section id="projects" className="bg-app text-app relative min-h-dvh overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                    Projects
                </h2>
                <p className="text-muted mt-4 max-w-2xl text-lg">
                    A curated selection of production-minded full-stack work.
                </p>

                <div className="mt-12">
                    <Carousel items={items} initialScroll={0} />
                </div>
            </div>
        </section>
    );
};
export default Projects;
