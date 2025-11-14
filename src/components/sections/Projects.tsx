import React from 'react';
import { Carousel, Card } from '../ui/visuals/AppleCardsCarousel';
import placeholderPhoto1 from '../../assets/placeholder1.avif';
import placeholderPhoto2 from '../../assets/placeholder2.avif';
import placeholderPhoto3 from '../../assets/placeholder3.avif';

type CardConfig = {
    src: string;
    title: string;
    category: string;
    description: string;
    bullets: string[];
    repoHref: string;
    liveHref: string;
    liveLabel: string;
};

const cardConfigs: CardConfig[] = [
    {
        src: placeholderPhoto1,
        title: 'Employee Management - React + Spring',
        category: 'Enterprise',
        description: 'HR-style CRUD with pagination/sorting, role-based access, board-game sub-entities.',
        bullets: [
            'React + TypeScript, Vite, Tailwind, nginx',
            'Spring Boot, REST, DTOs, H2/PG, third-party email authentication, role-based authorization',
            'PostgreSQL, Docker Compose (CI-ready structure)',
        ],
        repoHref: 'https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-DelczBalazs',
        liveHref: 'https://delczbalazs.github.io',
        liveLabel: 'Live demo (Deploying soon)',
    },
    {
        src: placeholderPhoto2,
        title: 'SolarWatch - React + Spring Boot',
        category: 'Full-stack',
        description: 'Sunrise/sunset lookup with geocoding, JWT, Postgres, Dockerized dev.',
        bullets: [
            'React + TypeScript, Vite, Tailwind',
            'Spring Boot, REST, DTOs, H2/PG',
            'CI-ready structure',
        ],
        repoHref: 'https://github.com/CodecoolGlobal/solar-watch-MVP-java-DelczBalazs',
        liveHref: 'https://delczbalazs.github.io',
        liveLabel: 'Live demo (Coming soon)',
    },
    {
        src: placeholderPhoto3,
        title: 'PresetCrate - VS Code Extension (COMING SOON)',
        category: 'DX / Tooling',
        description: 'Opinionated snippet/prompt presets for faster day-to-day dev work.',
        bullets: [
            'VS Code API, esbuild bundling',
            'Typed store, export/import',
            'DX-first documentation',
        ],
        repoHref: 'https://delczbalazs.github.io',
        liveHref: 'https://delczbalazs.github.io',
        liveLabel: 'Live demo (Coming soon)',
    },
];

const cards = cardConfigs.map((card) => ({
    ...card,
    content: (
        <div className="text-app space-y-3">
            <p className="text-muted text-base">{card.description}</p>
            <ul className="text-muted list-disc pl-5 text-sm">
                {card.bullets.map((bullet) => (
                    <li key={`${card.title}-${bullet}`}>{bullet}</li>
                ))}
            </ul>
            <div className="mt-4 flex gap-3">
                <a
                    target="_blank"
                    rel="noopener"
                    href={card.repoHref}
                    className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow"
                >
                    Repo
                </a>
                <a
                    target="_blank"
                    rel="noopener"
                    href={card.liveHref}
                    className="bg-card text-app rounded-xl border border-black/10 px-4 py-2 font-medium shadow-sm dark:border-white/10"
                >
                    {card.liveLabel}
                </a>
            </div>
        </div>
    ),
}));

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
                    <div className="sr-only" aria-hidden="false">
                        {cardConfigs.map((card) => (
                            <div key={`${card.title}-links`}>
                                <a target="_blank" rel="noopener" href={card.repoHref}>
                                    Repo
                                </a>
                                <a target="_blank" rel="noopener" href={card.liveHref}>
                                    {card.liveLabel.includes('Live demo') ? 'Live demo' : card.liveLabel}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
