/* ─────────────────────────────────────────────
   components/Introduccion.jsx
───────────────────────────────────────────── */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, VIEWPORT } from "../utils/animations";

export default function Introduccion() {
    const { t } = useTranslation();

    return (
        <section className="osc-section osc-section--intro" id="intro">

            {/* Fondo cuadrícula */}
            <div className="osc-bg-grid" aria-hidden="true" />
            {/* Glow */}
            <div className="osc-glow osc-glow--green" aria-hidden="true" />

            <div className="osc-container">

                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="osc-section__badge"
                >
                    <span className="osc-badge-line" />
                    <span className="osc-badge-text osc-badge-text--green">{t('intro.badge')}</span>
                    <span className="osc-badge-line" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="osc-intro__heading"
                >
                    {t('intro.title_l1')}
                    <span className="osc-intro__heading-accent">
                        {t('intro.title_accent')}
                        <motion.span
                            className="osc-intro__heading-underline"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
                            viewport={VIEWPORT}
                        />
                    </span>
                </motion.h2>

                {/* Subtítulo */}
                <motion.p
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="osc-intro__sub"
                >
                    {t('intro.sub')}
                </motion.p>

                {/* Tarjeta principal */}
                <motion.div
                    variants={fadeUp}
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="osc-card osc-card--glass osc-intro__card"
                >
                    <div className="osc-intro__quote">
                        <span className="osc-intro__quote-icon" aria-hidden="true">👁</span>
                        <p className="osc-intro__quote-text">
                            {t('intro.quote_p1')}
                            <strong className="osc-text--green">{t('intro.quote_strong1')}</strong>
                            {t('intro.quote_p2')}
                            <strong className="osc-text--green">{t('intro.quote_strong2')}</strong>
                            {t('intro.quote_p3')}
                        </p>
                    </div>

                    <hr className="osc-divider" />

                    <p className="osc-intro__body">
                        {t('intro.body_p1')}
                        <span className="osc-text--light">{t('intro.body_span')}</span>
                        {t('intro.body_p2')}
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="osc-stats">
                    {t('intro.stats', { returnObjects: true }).map((s, i) => (
                        <motion.div
                            key={s.label}
                            variants={fadeUp}
                            custom={4 + i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={VIEWPORT}
                            whileHover={{ scale: 1.03 }}
                            className="osc-stat"
                        >
                            <span className="osc-stat__value">{s.value}</span>
                            <span className="osc-stat__label">{s.label}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}