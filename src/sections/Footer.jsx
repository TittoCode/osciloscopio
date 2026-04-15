/* ─────────────────────────────────────────────
   sections/Footer.jsx
   Pie de página con links y créditos.
───────────────────────────────────────────── */
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "../utils/constants";

export default function Footer() {
    const { t } = useTranslation();
    const navLinksList = t('header.nav', { returnObjects: true });
    const year = new Date().getFullYear();

    return (
        <footer className="osc-footer">
            <div className="osc-footer__inner">

                {/* Logo */}
                <div className="osc-footer__brand">
                    <span className="osc-footer__logo">
                        OSC<span className="osc-footer__logo-white">-SCOPE</span>
                    </span>
                    <p className="osc-footer__tagline">
                        {t('footer.tagline')}
                    </p>
                </div>

                {/* Links */}
                <nav className="osc-footer__nav" aria-label="Navegación del footer">
                    {navLinksList.map(({ href, label }) => (
                        <a key={href} href={href} className="osc-footer__link">
                            {label}
                        </a>
                    ))}
                </nav>

            </div>

            {/* Línea inferior */}
            <div className="osc-footer__bottom">
                <span>{t('footer.bottom_text')} {year}</span>
                <span className="osc-footer__signal" aria-hidden="true">
                    <span className="osc-dot osc-dot--green osc-dot--sm" />
                    {t('footer.signal')}
                </span>
            </div>
        </footer>
    );
}