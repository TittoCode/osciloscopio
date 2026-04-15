import { useEffect, useState } from "react";
import Header         from "./sections/Header";
import Hero           from "./sections/Hero";
import Footer         from "./sections/Footer";
import Introduccion   from "./components/Introduccion";
import Historia       from "./components/Historia";
import Definicion     from "./components/Definicion";
import Tipos          from "./components/Tipos";
import Partes         from "./components/Partes";
import Controles      from "./components/Controles";
import Funcionamiento from "./components/Funcionamiento";
import ComoUsar       from "./components/ComoUsar";
import Aplicaciones   from "./components/Aplicaciones";
import Quiz           from "./components/Quiz";
import LanguageSwitcher from "./components/LanguageSwitcher";

function ScrollProgress() {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        const update = () => {
            const el  = document.documentElement;
            const top = el.scrollTop || document.body.scrollTop;
            const h   = el.scrollHeight - el.clientHeight;
            setPct(h > 0 ? (top / h) * 100 : 0);
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);
    return (
        <div className="osc-scroll-progress" aria-hidden="true">
            <div className="osc-scroll-progress__fill" style={{ width: `${pct}%` }} />
        </div>
    );
}

export default function App() {
    return (
        <div className="osc-app">
            <ScrollProgress />
            <Header />
            <main>
                <Hero />
                <Introduccion />
                <Historia />
                <Definicion />
                <Tipos />
                <Partes />
                <Controles />
                <Funcionamiento />
                <ComoUsar />
                <Aplicaciones />
                <Quiz />
            </main>
            <Footer />
            <LanguageSwitcher />
        </div>
    );
}