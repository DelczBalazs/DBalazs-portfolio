import { useMemo, useState, FormEvent } from "react";
import { Mail, Loader2, Check } from "lucide-react";
import { cn } from "../../utils/cn";

type FormData = {
    name: string;
    email: string;
    thread: string;
    message: string;
    captcha: string;
};

export default function Contact() {
    // simple math captcha (client-side, replace with server-side later if needed)
    const [a, b] = useMemo(() => {
        const x = Math.floor(Math.random() * 8) + 2; // 2..9
        const y = Math.floor(Math.random() * 8) + 1; // 1..9
        return [x, y];
    }, []);
    const answer = a + b;

    const [data, setData] = useState<FormData>({
        name: "",
        email: "",
        thread: "",
        message: "",
        captcha: "",
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((d) => ({ ...d, [name]: value }));
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        // basic validation
        if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
            setError("Please fill in name, email, and message.");
            return;
        }
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
        if (!emailOk) {
            setError("Please enter a valid email address.");
            return;
        }
        if (parseInt(data.captcha || "0", 10) !== answer) {
            setError("Captcha answer is incorrect.");
            return;
        }

        setSending(true);
        // TODO: wire to your backend / Formspree / Resend / EmailJS
        await new Promise((r) => setTimeout(r, 700));
        setSending(false);
        setSent(true);
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-app text-app min-h-dvh">
            <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">Contact</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">
                    Tell me about your project. I build clean, scalable full-stack products.
                </p>

                {/* Aceternity “Signup Form” style: glassy card, subtle border, blur, dark-mode aware */}
                <form
                    onSubmit={onSubmit}
                    className={cn(
                        "mt-8 grid gap-4 rounded-2xl border border-black/10 dark:border-white/10",
                        "bg-card/70 backdrop-blur p-6 sm:p-8 shadow"
                    )}
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-app">Name</label>
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={onChange}
                                placeholder="Your name"
                                className={cn(
                                    "h-11 w-full rounded-xl border border-black/10 dark:border-white/10",
                                    "bg-white/70 dark:bg-black/30 px-3 text-app placeholder:text-muted",
                                    "focus:outline-none focus:ring-2 ring-accent"
                                )}
                                autoComplete="name"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-app">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={onChange}
                                placeholder="you@example.com"
                                className={cn(
                                    "h-11 w-full rounded-xl border border-black/10 dark:border-white/10",
                                    "bg-white/70 dark:bg-black/30 px-3 text-app placeholder:text-muted",
                                    "focus:outline-none focus:ring-2 ring-accent"
                                )}
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="thread" className="text-sm font-medium text-app">Subject</label>
                        <input
                            id="thread"
                            name="thread"
                            value={data.thread}
                            onChange={onChange}
                            placeholder="Project, collaboration, question…"
                            className={cn(
                                "h-11 w-full rounded-xl border border-black/10 dark:border-white/10",
                                "bg-white/70 dark:bg-black/30 px-3 text-app placeholder:text-muted",
                                "focus:outline-none focus:ring-2 ring-accent"
                            )}
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-app">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={data.message}
                            onChange={onChange}
                            placeholder="How can I help?"
                            className={cn(
                                "w-full rounded-xl border border-black/10 dark:border-white/10",
                                "bg-white/70 dark:bg-black/30 px-3 py-3 text-app placeholder:text-muted",
                                "focus:outline-none focus:ring-2 ring-accent resize-y"
                            )}
                        />
                    </div>

                    {/* simple math captcha */}
                    <div className="grid gap-2 sm:grid-cols-[auto,200px] sm:items-center">
                        <label className="text-sm font-medium text-app">
                            Prove you’re human:&nbsp;
                            <span className="font-semibold">{a} + {b} = ?</span>
                        </label>
                        <input
                            name="captcha"
                            value={data.captcha}
                            onChange={onChange}
                            inputMode="numeric"
                            placeholder="Answer"
                            className={cn(
                                "h-11 w-full rounded-xl border border-black/10 dark:border-white/10",
                                "bg-white/70 dark:bg-black/30 px-3 text-app placeholder:text-muted",
                                "focus:outline-none focus:ring-2 ring-accent"
                            )}
                            aria-describedby="captchaHelp"
                        />
                    </div>
                    <p id="captchaHelp" className="text-xs text-muted">
                        This is a simple client-side check; production forms should verify on the server.
                    </p>

                    {error && (
                        <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">
                            {error}
                        </p>
                    )}

                    <div className="mt-2 flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={sending}
                            className={cn(
                                "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold shadow",
                                "bg-[rgb(var(--accent))] text-white",
                                sending && "opacity-70"
                            )}
                        >
                            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                            {sending ? "Sending…" : "Send message"}
                        </button>

                        {sent && (
                            <span className="inline-flex items-center text-sm text-muted">
                                <Check className="mr-1 h-4 w-4" /> Sent (demo)
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}