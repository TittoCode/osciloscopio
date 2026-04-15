/* ─────────────────────────────────────────────
   components/Historia.jsx
───────────────────────────────────────────── */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { slideInLeft, VIEWPORT_MARGIN } from "../utils/animations";
import { TIMELINE_COLOR_MAP } from "../utils/constants";

/* ── Onda decorativa al pie de cada tarjeta ── */
function SineDecorator({ color }) {
    const stroke = TIMELINE_COLOR_MAP[color]?.wave ?? "#4ade80";
    return (
        <svg viewBox="0 0 240 32" className="w-full" aria-hidden="true">
            <motion.path
                d="M0 16 C20 4,40 28,60 16 S100 4,120 16 S160 28,180 16 S220 4,240 16"
                fill="none"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                viewport={{ once: true }}
            />
        </svg>
    );
}

/* ── Un ítem de la línea de tiempo ── */
function TimelineItem({ event, index, isLast, milestoneText }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const c = TIMELINE_COLOR_MAP[event.color];

    return (
        <div ref={ref} className="osc-timeline__item">

            {/* Dot + línea vertical */}
            <div className="osc-timeline__track">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                    className={`osc-timeline__dot ${c.dot}`}
                />
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                        className="osc-timeline__line"
                    />
                )}
            </div>

            {/* Tarjeta */}
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInLeft}
                custom={index * 0.2}
                whileHover={{ y: -4 }}
                className={`osc-card osc-timeline__card ${c.border} ${c.glow}`}
            >
                {/* Header */}
                <div className="osc-timeline__card-header">
                    <div className="osc-timeline__card-meta">
                        <span className={`osc-timeline__icon ${c.icon}`}>{event.icon}</span>
                        <div>
                            <p className={`osc-timeline__year ${c.year}`}>{event.year}</p>
                            <h3 className="osc-timeline__title">{event.title}</h3>
                        </div>
                    </div>
                    <span className={`osc-badge ${c.badge}`}>{milestoneText}</span>
                </div>

                {/* Body */}
                <p className="osc-timeline__body">{event.body}</p>

                {/* Onda decorativa */}
                <div className="osc-timeline__wave">
                    <SineDecorator color={event.color} />
                </div>
            </motion.div>

        </div>
    );
}

/* ── Sección principal ── */
export default function Historia() {
    const { t } = useTranslation();
    const events = t('historia.events', { returnObjects: true });

    return (
        <section className="osc-section osc-section--historia" id="historia">

            {/* Patrón de puntos de fondo */}
            <div className="osc-bg-dots" aria-hidden="true" />

            <div className="osc-container osc-container--narrow">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--green">{t('historia.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('historia.title_l1')}
                        <br />
                        <span className="osc-text--green">{t('historia.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('historia.desc')}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div>
                    {events.map((event, i) => (
                        <TimelineItem
                            key={event.year}
                            event={event}
                            index={i}
                            isLast={i === events.length - 1}
                            milestoneText={t('historia.milestone')}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}