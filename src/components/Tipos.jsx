/* components/Tipos.jsx */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, scaleIn, VIEWPORT } from "../utils/animations";
import { TIPOS_CARDS } from "../utils/constants";

function WaveMini({ color }) {
    return (
        <svg viewBox="0 0 200 32" className="w-full" aria-hidden="true">
            <motion.path
                d="M0 16 C20 4,40 28,60 16 S100 4,120 16 S160 28,180 16 S200 4,220 16"
                fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                viewport={{ once: true }}
            />
        </svg>
    );
}

function TipoCard({ card, index }) {
    const isAnalog = card.id === "analogico";
    const accent = isAnalog
        ? { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-300", glow: "shadow-[0_0_40px_rgba(34,197,94,0.08)]", badge: "bg-green-500/10 text-green-300 border-green-500/20", dot: "bg-green-400" }
        : { border: "border-blue-500/30",  bg: "bg-blue-500/10",  text: "text-blue-300",  glow: "shadow-[0_0_40px_rgba(96,165,250,0.08)]",  badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",   dot: "bg-blue-400" };

    return (
        <motion.div
            variants={fadeUp}
            custom={index * 0.15}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={{ scale: 1.02, y: -6 }}
            className={`osc-card osc-tipo-card ${accent.border} ${accent.glow}`}
        >
            <div className="osc-tipo-card__head">
                <span className="osc-tipo-card__icon">{card.icon}</span>
                <div>
                    <span className={`osc-badge ${accent.badge}`}>{card.badge}</span>
                    <h3 className="osc-tipo-card__title">{card.tipo}</h3>
                </div>
            </div>

            <div className="osc-tipo-card__lists">
                <div>
                    <p className="osc-tipo-card__list-label osc-tipo-card__list-label--pro">✓ Ventajas</p>
                    <ul className="osc-tipo-card__list">
                        {card.pros.map(p => (
                            <li key={p} className="osc-tipo-card__li">
                                <span className={`osc-tipo-card__dot ${accent.dot}`} />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="osc-tipo-card__list-label osc-tipo-card__list-label--con">✗ Limitaciones</p>
                    <ul className="osc-tipo-card__list">
                        {card.cons.map(c => (
                            <li key={c} className="osc-tipo-card__li osc-tipo-card__li--con">
                                <span className="osc-tipo-card__dot bg-slate-500" />
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`osc-tipo-card__ejemplo ${accent.bg}`}>
                <span className="osc-tipo-card__ejemplo-label">Ejemplo:</span>
                <span className={`osc-tipo-card__ejemplo-val ${accent.text}`}>{card.ejemplo}</span>
            </div>

            <div className="osc-tipo-card__wave">
                <WaveMini color={card.wave} />
            </div>
        </motion.div>
    );
}

export default function Tipos() {
    const { t } = useTranslation();
    const translatedCards = t('tipos.cards', { returnObjects: true });
    const cards = TIPOS_CARDS.map((c, i) => ({ ...c, ...translatedCards[i] }));

    return (
        <section className="osc-section osc-section--tipos" id="tipos">
            <div className="osc-bg-dots" aria-hidden="true" />
            <div className="osc-glow osc-glow--green" aria-hidden="true" />

            <div className="osc-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--green">{t('tipos.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('tipos.title_l1')}<br />
                        <span className="osc-text--green">{t('tipos.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('tipos.desc')}
                    </p>
                </motion.div>

                <div className="osc-tipos__grid">
                    {cards.map((card, i) => (
                        <TipoCard key={card.id} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
