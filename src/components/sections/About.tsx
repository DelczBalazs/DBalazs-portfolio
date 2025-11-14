import { BackgroundLines } from '../ui/visuals/BackgroundLines';
import { ColorfulText } from '../ui/visuals/ColorfulText';

export default function About() {
    return (
        <BackgroundLines id="about" className="bg-app text-app min-h-dvh">
            <div className="mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-20 sm:py-28">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                    About me
                </h2>

                <p className="text-muted mt-6 text-lg">
                    I love designing and building{' '}
                    <strong>clean, scalable full-stack products</strong> that feel effortless to use
                    and reliable to maintain. My focus is clean-code, strong fundamentals, and
                    workflows that scale.
                </p>

                <p className="text-muted mt-4 text-lg">
                    On the frontend, I prefer <strong>TypeScript</strong>, <strong>React</strong>,
                    and <strong>Tailwind CSS</strong> for fast, accessible UIs. On the backend, I’m
                    comfortable with <strong>Java / Spring</strong> and{' '}
                    <strong>Node.js / Express</strong>, deploying to <strong>Docker</strong> with{' '}
                    <strong>PostgreSQL</strong> or <strong>MongoDB</strong>. I’m pragmatic about
                    testing and CI/CD so shipping stays smooth.
                </p>

                <p className="mt-4 text-lg">
                    <ColorfulText text="My goal:"></ColorfulText> ship production-minded features
                    with great DX, consistent UX, and performance you can trust.
                </p>
            </div>
        </BackgroundLines>
    );
}
