import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "../utils/constants";

export default function Header() {
    const { t } = useTranslation();
    const navLinksList = t('header.nav', { returnObjects: true });

    const [open,      setOpen]      = useState(false);
    const [scrolled,  setScrolled]  = useState(false);
    const [activeId,  setActiveId]  = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const ids = NAV_LINKS.map(l => l.href.replace("#", ""));
        const observers = [];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const close = () => setOpen(false);

    return (
        <>
            <header className={`osc-header ${scrolled ? "osc-header--scrolled" : ""}`}>
                <div className="osc-header__inner">

                    {/* Logo */}
                    <a href="#" className="osc-header__logo" onClick={close}>
                        OSC<span className="osc-header__logo-white">-SCOPE</span>
                    </a>

                    {/* Nav desktop */}
                    <nav className="osc-header__nav" aria-label="Navegación principal">
                        {navLinksList.map(({ href, label }) => {
                            const id = href.replace("#", "");
                            return (
                                <a
                                    key={href}
                                    href={href}
                                    className={`osc-header__link ${activeId === id ? "osc-header__link--active" : ""}`}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Lado derecho: indicador LIVE + hamburguesa */}
                    <div className="osc-header__right">
                        <span className="osc-header__live" aria-label="Señal en vivo">
                            <span className="osc-header__live-dot" aria-hidden="true">
                                <span className="osc-header__live-ping" />
                                <span className="osc-header__live-core" />
                            </span>
                            <span className="osc-header__live-label">{t('header.live')}</span>
                        </span>

                        {/* Botón hamburguesa — solo mobile */}
                        <button
                            className={`osc-hamburger ${open ? "osc-hamburger--open" : ""}`}
                            onClick={() => setOpen(v => !v)}
                            aria-label={open ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={open}
                        >
                            <span className="osc-hamburger__bar" />
                            <span className="osc-hamburger__bar" />
                            <span className="osc-hamburger__bar" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Panel de menú mobile */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="osc-mobile-nav__backdrop"
                            onClick={close}
                        />
                        {/* Drawer */}
                        <motion.nav
                            key="drawer"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0,      opacity: 1 }}
                            exit={{    x: "100%", opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="osc-mobile-nav"
                            aria-label="Navegación móvil"
                        >
                            {/* Cabecera del drawer */}
                            <div className="osc-mobile-nav__head">
                                <span className="osc-header__logo">
                                    OSC<span className="osc-header__logo-white">-SCOPE</span>
                                </span>
                                <button
                                    className="osc-mobile-nav__close"
                                    onClick={close}
                                    aria-label="Cerrar menú"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Links */}
                            <ul className="osc-mobile-nav__list">
                                {navLinksList.map(({ href, label }, i) => (
                                    <motion.li
                                        key={href}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0  }}
                                        transition={{ duration: 0.28, delay: i * 0.055 + 0.05 }}
                                    >
                                        <a
                                            href={href}
                                            className="osc-mobile-nav__link"
                                            onClick={close}
                                        >
                                            <span className="osc-mobile-nav__link-num">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            {label}
                                            <span className="osc-mobile-nav__link-arrow">→</span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Pie del drawer */}
                            <div className="osc-mobile-nav__foot">
                                <span className="osc-header__live">
                                    <span className="osc-header__live-dot">
                                        <span className="osc-header__live-ping" />
                                        <span className="osc-header__live-core" />
                                    </span>
                                    {t('header.signal')}
                                </span>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}