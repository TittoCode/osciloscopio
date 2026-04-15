import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, VIEWPORT } from "../utils/animations";
import { APLICACIONES_LIST } from "../utils/constants";

const COLOR_MAP = {
    green:  { border: "border-green-500/30",  bg: "bg-green-500/10",  text: "text-green-300",  glow: "shadow-[0_0_28px_rgba(34,197,94,0.08)]",   icon: "bg-green-500/15" },
    cyan:   { border: "border-cyan-500/30",   bg: "bg-cyan-500/10",   text: "text-cyan-300",   glow: "shadow-[0_0_28px_rgba(34,211,238,0.08)]",  icon: "bg-cyan-500/15" },
    blue:   { border: "border-blue-500/30",   bg: "bg-blue-500/10",   text: "text-blue-300",   glow: "shadow-[0_0_28px_rgba(96,165,250,0.08)]",   icon: "bg-blue-500/15" },
    amber:  { border: "border-amber-500/30",  bg: "bg-amber-500/10",  text: "text-amber-300",  glow: "shadow-[0_0_28px_rgba(251,191,36,0.08)]",  icon: "bg-amber-500/15" },
    purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-300", glow: "shadow-[0_0_28px_rgba(167,139,250,0.08)]", icon: "bg-purple-500/15" },
};

function AppCard({ app, index }) {
    const c = COLOR_MAP[app.color];
    return (
        <motion.div
            variants={fadeUp}
            custom={index * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={{ scale: 1.04, y: -6 }}
            className={`osc-card osc-app-card ${c.border} ${c.glow}`}
        >
            <div className={`osc-app-card__icon ${c.icon}`}>{app.icono}</div>
            <h3 className={`osc-app-card__title ${c.text}`}>{app.titulo}</h3>
            <p className="osc-app-card__body">{app.body}</p>
            <motion.div
                className={`osc-app-card__bar ${c.bg}`}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={VIEWPORT}
            />
        </motion.div>
    );
}

export default function Aplicaciones() {
    const { t } = useTranslation();
    const translatedList = t('aplicaciones.list', { returnObjects: true });
    const apps = APLICACIONES_LIST.map((a, i) => ({ ...a, ...translatedList[i] }));

    return (
        <section className="osc-section osc-section--aplicaciones" id="aplicaciones">
            <div className="osc-bg-dots" aria-hidden="true" />
            <div className="osc-glow osc-glow--sky" aria-hidden="true" />

            <div className="osc-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--sky">{t('aplicaciones.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('aplicaciones.title_l1')}<br />
                        <span className="osc-text--sky">{t('aplicaciones.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('aplicaciones.desc')}
                    </p>
                </motion.div>

                <div className="osc-apps__grid">
                    {apps.map((app, i) => (
                        <AppCard key={app.titulo} app={app} index={i} />
                    ))}
                </div>

                {/* Cierre con señal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={VIEWPORT}
                    className="osc-apps__cta"
                >
                    <svg viewBox="0 0 640 60" className="osc-apps__wave" aria-hidden="true">
                        {[12, 24, 36, 48].map(y => (
                            <line key={y} x1="0" y1={y} x2="640" y2={y}
                                stroke="#22c55e" strokeWidth="0.3" opacity="0.15" />
                        ))}
                        <motion.path
                            d="M0 30 C40 8,80 52,120 30 S200 8,240 30 S320 52,360 30 S440 8,480 30 S560 52,640 30"
                            fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                    </svg>
                    <p className="osc-apps__cta-text">
                        <span className="osc-dot osc-dot--green osc-dot--sm" />
                        {t('aplicaciones.cta')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
