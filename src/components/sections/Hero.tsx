import { motion } from "motion/react";
import { WavyBackground } from "../ui/visuals/WavyBackground";
import { AnimatedTooltip } from "../ui/visuals/AnimatedTooltip";
import { ColorfulText } from "../ui/visuals/ColorfulText";

import gitIcon from "../../assets/git-original.svg";
import typescriptIcon from "../../assets/typescript-original.svg";
import javaIcon from "../../assets/java-original.svg";
import reactIcon from "../../assets/react-original.svg";
import angularIcon from "../../assets/angularjs-original.svg";
import tailwindIcon from "../../assets/tailwindcss-original.svg";
import springIcon from "../../assets/spring-original.svg";
import nodeIcon from "../../assets/nodejs-original.svg";
import postgresqlIcon from "../../assets/postgresql-original.svg";
import mongodbIcon from "../../assets/mongodb-original.svg";

type TechItem = { id: number; name: string; designation: string; image: string };

const techItems: TechItem[] = [
    { id: 1, name: "Git", designation: "VCS", image: gitIcon },
    { id: 2, name: "Java", designation: "Language", image: javaIcon },
    { id: 3, name: "Spring", designation: "BE Framework", image: springIcon },
    { id: 4, name: "TypeScript", designation: "Language", image: typescriptIcon },
    /* { id: 5,  name: "Python",        designation: "Language",   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, */
    { id: 6, name: "React", designation: "Library", image: reactIcon },
    { id: 7, name: "Angular", designation: "FE Framework", image: angularIcon },
    { id: 8, name: "Tailwind CSS", designation: "CSS Framework", image: tailwindIcon },
    { id: 9,  name: "Node.js",       designation: "Runtime",    image: nodeIcon },
    /* { id: 10, name: "Express.js", designation: "BE Framework", image: expressIcon }, */
    { id: 11, name: "PostgreSQL", designation: "Database", image: postgresqlIcon },
    { id: 12, name: "MongoDB", designation: "Database", image: mongodbIcon }
];

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-app text-app">
            <WavyBackground
                containerClassName="relative overflow-hidden items-start justify-start bg-app text-app"
                backgroundFill="transparent"
                className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
                >
                    Hi, my name is Balázs Délczeg.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                    className="mt-6 max-w-2xl text-lg"
                >
                    I'm a <ColorfulText text="Full-Stack Developer"></ColorfulText>.
                    <br />
                    Check out my skills:
                </motion.p>
                <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-3 md:gap-5" aria-label="Technologies I use">
                    <AnimatedTooltip items={techItems} />
                </div>
            </WavyBackground>
        </section>
    );
}

export default Hero;

