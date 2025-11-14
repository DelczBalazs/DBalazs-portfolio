import Button from '../Button';
import { ColorfulText } from '../ui/visuals/ColorfulText';

const Contact = () => {
    return (
        <div
            id="contact"
            className="min-h-90% mx-auto flex max-w-5xl flex-col justify-center px-6 py-20 sm:py-28"
        >
            <div className="flex flex-col items-center justify-center">
                <h2 className="hover-glow text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                    <ColorfulText text="Contact me"></ColorfulText>
                </h2>
                <div>
                    <a
                        title="Send an email"
                        key={'send email button'}
                        href="mailto:dbalazsworkemail@gmail.com"
                    >
                        <Button
                            aria-label="emailButton"
                            children="Send an Email"
                            className="mt-6 text-lg"
                        />
                    </a>
                    <a 
                        rel='noopener'
                        title="Write on LinkedIn"
                        key={'Write on LinkedIn button'}
                        target="_blank"
                        href="https://www.linkedin.com/in/delczegb/"
                    >
                        <Button
                            aria-label="linkedinButton"
                            children="Write on LinkedIn"
                            className="mt-6 text-lg"
                        />
                    </a>
                    <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="backHomeButton"
                        children="Back to top"
                        className="mt-6 text-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
