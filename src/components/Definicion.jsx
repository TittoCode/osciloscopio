/* ─────────────────────────────────────────────
   components/Definicion.jsx
───────────────────────────────────────────── */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { scaleIn, fadeUp, VIEWPORT } from "../utils/animations";

/* ── Diagrama SVG animado de ejes ── */
function AxisDiagram({ texts }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    const gridX = [40, 80, 120, 160, 200, 240, 280];
    const gridY = [40, 80, 120, 160, 200];

    return (
        <div ref={ref} className="osc-axis__diagram">
            <svg viewBox="0 0 320 240" className="osc-axis__svg" aria-label="Diagrama de ejes X e Y">

                {/* Cuadrícula */}
                {gridX.map((x) => (
                    <line key={`vg${x}`} x1={x} y1={20} x2={x} y2={220}
                        stroke="#22c55e" strokeWidth="0.3" opacity="0.2" />
                ))}
                {gridY.map((y) => (
                    <line key={`hg${y}`} x1={20} y1={y} x2={300} y2={y}
                        stroke="#22c55e" strokeWidth="0.3" opacity="0.2" />
                ))}

                {/* Eje X */}
                <motion.line x1="30" y1="120" x2="295" y2="120"
                    stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                />
                <motion.polygon points="295,115 307,120 295,125" fill="#4ade80"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.85 }}
                />

                {/* Eje Y */}
                <motion.line x1="40" y1="210" x2="40" y2="25"
                    stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                />
                <motion.polygon points="35,25 40,13 45,25" fill="#38bdf8"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.25 }}
                />

                {/* Onda senoidal */}
                <motion.path
                    d="M40 120 C67 80,93 160,120 120 S173 80,200 120 S253 160,280 120"
                    fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
                />

                {/* Labels */}
                <motion.text x="298" y="138" fill="#4ade80" fontSize="11" fontFamily="monospace"
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.0 }}>{texts.time}</motion.text>
                <motion.text x="46" y="17" fill="#38bdf8" fontSize="11" fontFamily="monospace"
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}>{texts.voltage}</motion.text>
                <motion.text x="148" y="72" fill="#a3e635" fontSize="9" fontFamily="monospace" textAnchor="middle"
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 0.8 } : {}} transition={{ delay: 2.0 }}>{texts.signal}</motion.text>

                {/* Punto origen */}
                <motion.circle cx="40" cy="120" r="3.5" fill="#64748b"
                    initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring" }}
                />
            </svg>

            {/* Leyenda */}
            <div className="osc-axis__legend">
                <span className="osc-axis__legend-item osc-axis__legend-item--x">
                    <span className="osc-axis__legend-swatch osc-axis__legend-swatch--h" />
                    {texts.legend_x}
                </span>
                <span className="osc-axis__legend-item osc-axis__legend-item--y">
                    <span className="osc-axis__legend-swatch osc-axis__legend-swatch--v" />
                    {texts.legend_y}
                </span>
            </div>
        </div>
    );
}

/* ── Tarjeta de eje ── */
function AxisCard({ axis, color, label, description, delay }) {
    const accent = color === "green"
        ? { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-300", dot: "bg-green-400", glow: "shadow-[0_0_24px_rgba(34,197,94,0.1)]" }
        : { border: "border-sky-500/30", bg: "bg-sky-500/10", text: "text-sky-300", dot: "bg-sky-400", glow: "shadow-[0_0_24px_rgba(56,189,248,0.1)]" };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className={`osc-card osc-axis-card ${accent.border} ${accent.glow}`}
        >
            <div className="osc-axis-card__header">
                <span className={`osc-axis-card__label ${accent.bg} ${accent.text}`}>{axis}</span>
                <div>
                    <p className={`osc-axis-card__axis-name ${accent.text}`}>EJE {axis}</p>
                    <p className="osc-axis-card__title">{label}</p>
                </div>
            </div>
            <p className="osc-axis-card__desc">{description}</p>
            <div className="osc-axis-card__bar">
                <motion.div
                    className={`osc-axis-card__bar-fill ${accent.dot}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.div>
    );
}

/* ── Sección principal ── */
export default function Definicion() {
    const { t } = useTranslation();
    const diagramTexts = t('definicion.diagram', { returnObjects: true });
    const cards = t('definicion.cards', { returnObjects: true });
    const note = t('definicion.note', { returnObjects: true });

    return (
        <section className="osc-section osc-section--definicion" id="definicion">

            {/* Glow de fondo */}
            <div className="osc-glow osc-glow--sky" aria-hidden="true" />

            <div className="osc-container">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--sky">{t('definicion.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('definicion.title_l1')}
                        <br />
                        <span className="osc-text--sky">{t('definicion.title_l2')}</span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
                        className="osc-section__desc"
                    >
                        {t('definicion.desc_p1')}
                        <span className="osc-text--light">{t('definicion.desc_s1')}</span>
                        {t('definicion.desc_p2')}
                        <span className="osc-text--light">{t('definicion.desc_s2')}</span>
                        {t('definicion.desc_p3')}
                    </motion.p>
                </motion.div>

                {/* Layout: diagrama + tarjetas */}
                <div className="osc-definicion__grid">

                    {/* Diagrama animado */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="osc-card osc-definicion__screen"
                    >
                        <div className="osc-window-dots">
                            <span className="osc-dot osc-dot--red" />
                            <span className="osc-dot osc-dot--yellow" />
                            <span className="osc-dot osc-dot--green" />
                            <span className="osc-window-label">{diagramTexts.window_label}</span>
                        </div>
                        <AxisDiagram texts={diagramTexts} />
                    </motion.div>

                    {/* Tarjetas + nota técnica */}
                    <div className="osc-definicion__cards">
                        {cards.map((card) => (
                            <AxisCard key={card.axis} {...card} />
                        ))}

                        {/* Nota técnica */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="osc-card osc-note"
                        >
                            <div className="osc-note__header">
                                <span>⚠️</span>
                                <span className="osc-note__label">{note.label}</span>
                            </div>
                            <p className="osc-note__body">
                                {note.body_p1}
                                <strong className="osc-text--amber">{note.str1}</strong>
                                {note.body_p2}
                                <strong className="osc-text--amber">{note.str2}</strong>
                                {note.body_p3}
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}