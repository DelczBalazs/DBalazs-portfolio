const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a
                        href="https://www.linkedin.com/in/delczegb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM7 19h-3v-9h3v9zM5.5 8.5C4.12 8.5 3 7.38 3 6S4.12 3.5 5.5 3.5 8 4.62 8 6 6.88 8.5 5.5 8.5zM20 19h-3v-4.5c0-1.356-.027-3.102-1.892-3.102-1.894 0-2.184 1.478-2.184 3v4.602h-3v-9h2.881v1.233h.041c.402-.764 1.384-1.571 2.846-1.571 3.044 0 3.607 2.003 3.607 4.605v4.733z" />
                        </svg>
                    </a>

                    <a
                        href="https://github.com/DelczBalazs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
                        </svg>
                    </a>
                </div>

                <p className="text-sm">2025 &copy; Made by Balázs Délczeg.</p>
            </div>
        </footer>
    );
}

export default Footer;