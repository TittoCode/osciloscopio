/* components/Funcionamiento.jsx */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { slideInLeft, VIEWPORT_MARGIN } from "../utils/animations";
import { PASOS_FUNCIONAMIENTO } from "../utils/constants";

const STEP_COLORS = {
    green:  { dot: "bg-green-400", year: "text-green-400", border: "border-green-500/30", glow: "shadow-[0_0_24px_rgba(34,197,94,0.1)]",  wave: "#4ade80", num: "text-green-400 border-green-500/40 bg-green-500/10" },
    cyan:   { dot: "bg-cyan-400",  year: "text-cyan-400",  border: "border-cyan-500/30",  glow: "shadow-[0_0_24px_rgba(34,211,238,0.1)]", wave: "#22d3ee", num: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" },
    amber:  { dot: "bg-amber-400", year: "text-amber-400", border: "border-amber-500/30", glow: "shadow-[0_0_24px_rgba(251,191,36,0.1)]", wave: "#fbbf24", num: "text-amber-400 border-amber-500/40 bg-amber-500/10" },
    blue:   { dot: "bg-blue-400",  year: "text-blue-400",  border: "border-blue-500/30",  glow: "shadow-[0_0_24px_rgba(96,165,250,0.1)]",  wave: "#60a5fa", num: "text-blue-400 border-blue-500/40 bg-blue-500/10" },
};

function WaveStep({ color, inView }) {
    return (
        <svg viewBox="0 0 280 36" className="w-full" aria-hidden="true">
            <motion.path
                d="M0 18 C24 4,48 32,72 18 S120 4,144 18 S192 32,216 18 S264 4,288 18"
                fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, ease: "easeInOut" }}
            />
        </svg>
    );
}

function StepItem({ paso, index, isLast }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const c = STEP_COLORS[paso.color];

    return (
        <div ref={ref} className="osc-step">
            {/* Track col */}
            <div className="osc-step__track">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.1, type: "spring", stiffness: 220 }}
                    className={`osc-step__dot ${c.dot}`}
                />
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        className="osc-step__line"
                    />
                )}
            </div>

            {/* Tarjeta */}
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInLeft}
                custom={index * 0.15}
                whileHover={{ y: -4 }}
                className={`osc-card osc-step__card ${c.border} ${c.glow}`}
            >
                <div className="osc-step__head">
                    <div className={`osc-step__num ${c.num}`}>{paso.numero}</div>
                    <div>
                        <span className="osc-step__icon">{paso.icono}</span>
                        <h3 className="osc-step__title">{paso.titulo}</h3>
                    </div>
                </div>
                <p className="osc-step__body">{paso.cuerpo}</p>
                <div className="osc-step__wave">
                    <WaveStep color={c.wave} inView={inView} />
                </div>
            </motion.div>
        </div>
    );
}

export default function Funcionamiento() {
    const { t } = useTranslation();
    const translatedPasos = t('funcionamiento.pasos', { returnObjects: true });
    const pasos = PASOS_FUNCIONAMIENTO.map((p, i) => ({ ...p, ...translatedPasos[i] }));

    return (
        <section className="osc-section osc-section--funcionamiento" id="funcionamiento">
            <div className="osc-bg-dots" aria-hidden="true" />
            <div className="osc-glow osc-glow--amber" aria-hidden="true" />

            <div className="osc-container osc-container--narrow">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--amber">{t('funcionamiento.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('funcionamiento.title_l1')}<br />
                        <span className="osc-text--amber">{t('funcionamiento.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('funcionamiento.desc')}
                    </p>
                </motion.div>

                <div>
                    {pasos.map((paso, i) => (
                        <StepItem
                            key={paso.numero}
                            paso={paso}
                            index={i}
                            isLast={i === pasos.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
