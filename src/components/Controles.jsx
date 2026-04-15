import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, VIEWPORT } from "../utils/animations";
import { CONTROLES_LIST } from "../utils/constants";

const COLOR_MAP = {
    green:  { border: "border-green-500/30",  bg: "bg-green-500/10",  text: "text-green-300",  badge: "bg-green-500/10 text-green-300 border-green-500/20",  icon: "text-green-400",  hex: "#4ade80" },
    amber:  { border: "border-amber-500/30",  bg: "bg-amber-500/10",  text: "text-amber-300",  badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",  icon: "text-amber-400",  hex: "#fbbf24" },
    cyan:   { border: "border-cyan-500/30",   bg: "bg-cyan-500/10",   text: "text-cyan-300",   badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",   icon: "text-cyan-400",   hex: "#22d3ee" },
    blue:   { border: "border-blue-500/30",   bg: "bg-blue-500/10",   text: "text-blue-300",   badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",   icon: "text-blue-400",   hex: "#60a5fa" },
    purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-300", badge: "bg-purple-500/10 text-purple-300 border-purple-500/20", icon: "text-purple-400", hex: "#a78bfa" },
    rose:   { border: "border-rose-500/30",   bg: "bg-rose-500/10",   text: "text-rose-300",   badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",   icon: "text-rose-400",   hex: "#fb7185" },
};

function ControlCard({ ctrl, index }) {
    const c = COLOR_MAP[ctrl.color];
    return (
        <motion.div
            variants={fadeUp}
            custom={index * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`osc-card osc-control-card ${c.border}`}
        >
            <div className={`osc-control-card__icon-wrap ${c.bg}`}>
                <span className={`osc-control-card__icon ${c.icon}`}>{ctrl.icono}</span>
            </div>
            <div className="osc-control-card__body">
                <div className="osc-control-card__top">
                    <span className={`osc-badge ${c.badge}`}>{ctrl.badge}</span>
                    <h3 className="osc-control-card__name">{ctrl.nombre}</h3>
                </div>
                <p className="osc-control-card__desc">{ctrl.desc}</p>
            </div>
            <motion.div
                className="osc-control-card__bar"
                style={{ background: `linear-gradient(to right, ${c.hex}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.08 + 0.3 }}
                viewport={VIEWPORT}
            />
        </motion.div>
    );
}

export default function Controles() {
    const { t } = useTranslation();
    const translatedList = t('controles.list', { returnObjects: true });
    const note = t('controles.note', { returnObjects: true });
    const controles = CONTROLES_LIST.map((c, i) => ({ ...c, ...translatedList[i] }));

    return (
        <section className="osc-section osc-section--controles" id="controles">
            <div className="osc-bg-grid" aria-hidden="true" />
            <div className="osc-glow osc-glow--purple" aria-hidden="true" />

            <div className="osc-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--purple">{t('controles.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('controles.title_l1')}<br />
                        <span className="osc-text--purple">{t('controles.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('controles.desc')}
                    </p>
                </motion.div>

                <div className="osc-controles__grid">
                    {controles.map((ctrl, i) => (
                        <ControlCard key={ctrl.nombre} ctrl={ctrl} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={VIEWPORT}
                    className="osc-card osc-note osc-note--warning"
                >
                    <div className="osc-note__header">
                        <span>⚠️</span>
                        <span className="osc-note__label">{note.label}</span>
                    </div>
                    <p className="osc-note__body">
                        {note.body_p1}
                        <strong className="osc-text--amber">{note.str}</strong>
                        {note.body_p2}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
