import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div className="bg-app text-app min-h-dvh">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
