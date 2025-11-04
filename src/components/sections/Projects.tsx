import React from "react";
import { Carousel, Card } from "../ui/visuals/AppleCardsCarousel";

type CardData = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

const cards: CardData[] = [
    {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
        title: "SolarWatch - React + Spring Boot",
        category: "Full-stack",
        content: (
            <div className="space-y-3 text-app">
                <p className="text-base text-muted">
                    Sunrise/sunset lookup with geocoding, JWT, Postgres, Dockerized dev.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted">
                    <li>React + TypeScript, Vite, Tailwind</li>
                    <li>Spring Boot, REST, DTOs, H2/PG</li>
                    <li>CI-ready structure</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a href="https://github.com/youruser/solarwatch" className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow">Repo</a>
                    <a href="#" className="rounded-xl border border-black/10 bg-card px-4 py-2 font-medium text-app shadow-sm dark:border-white/10">Live</a>
                </div>
            </div>
        ),
    },
    {
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
        title: "Employee Management - React + Spring",
        category: "Enterprise",
        content: (
            <div className="space-y-3 text-app">
                <p className="text-base text-muted">
                    HR-style CRUD with pagination/sorting, role-based access, board-game sub-entities.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted">
                    <li>React TS + Axios, protected routes</li>
                    <li>Spring (Controller → Service → Repo)</li>
                    <li>PostgreSQL, Docker Compose</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a href="https://github.com/youruser/employee-mgmt" className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow">Repo</a>
                    <a href="#" className="rounded-xl border border-black/10 bg-card px-4 py-2 font-medium text-app shadow-sm dark:border-white/10">Case study</a>
                </div>
            </div>
        ),
    },
    {
        src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
        title: "PresetCrate - VS Code Extension",
        category: "DX / Tooling",
        content: (
            <div className="space-y-3 text-app">
                <p className="text-base text-muted">
                    Opinionated snippet/prompt presets for faster day-to-day dev work.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted">
                    <li>VS Code API, esbuild bundling</li>
                    <li>Typed store, export/import</li>
                    <li>DX-first documentation</li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <a href="https://github.com/youruser/presetcrate" className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 font-medium text-white shadow">Repo</a>
                    <a href="#" className="rounded-xl border border-black/10 bg-card px-4 py-2 font-medium text-app shadow-sm dark:border-white/10">Marketplace</a>
                </div>
            </div>
        ),
    },
];

export const Projects = () => {
    const items = cards.map((card, i) => <Card key={card.title} card={card} index={i} layout />);

    return (
        <section id="projects" className="relative overflow-hidden bg-app text-app min-h-dvh">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">Projects</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">
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
