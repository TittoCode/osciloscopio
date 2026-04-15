/* components/Partes.jsx
   Diagrama interactivo del MO-1227.
   — Tooltip flotante al hacer hover sobre el SVG
   — Panel de detalle completo al hacer click
   — Animaciones suaves con Framer Motion
*/
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, scaleIn, VIEWPORT } from "../utils/animations";
import { PARTES_BLOQUES } from "../utils/constants";
import OsciloscopioSVG from "../assets/OsciloscopioSVG";

const COLOR_MAP = {
    green:  {
        text:   "text-green-300",
        bg:     "bg-green-500/10",
        border: "border-green-500/30",
        glow:   "shadow-[0_0_30px_rgba(34,197,94,0.15)]",
        dot:    "bg-green-400",
        badge:  "bg-green-500/10 text-green-300 border-green-500/20",
        pulse:  "rgba(34,197,94,0.3)",
        hex:    "#4ade80",
    },
    cyan: {
        text:   "text-cyan-300",
        bg:     "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow:   "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
        dot:    "bg-cyan-400",
        badge:  "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        pulse:  "rgba(34,211,238,0.3)",
        hex:    "#22d3ee",
    },
    amber: {
        text:   "text-amber-300",
        bg:     "bg-amber-500/10",
        border: "border-amber-500/30",
        glow:   "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
        dot:    "bg-amber-400",
        badge:  "bg-amber-500/10 text-amber-300 border-amber-500/20",
        pulse:  "rgba(251,191,36,0.3)",
        hex:    "#fbbf24",
    },
    purple: {
        text:   "text-purple-300",
        bg:     "bg-purple-500/10",
        border: "border-purple-500/30",
        glow:   "shadow-[0_0_30px_rgba(167,139,250,0.15)]",
        dot:    "bg-purple-400",
        badge:  "bg-purple-500/10 text-purple-300 border-purple-500/20",
        pulse:  "rgba(167,139,250,0.3)",
        hex:    "#a78bfa",
    },
    rose: {
        text:   "text-rose-300",
        bg:     "bg-rose-500/10",
        border: "border-rose-500/30",
        glow:   "shadow-[0_0_30px_rgba(251,113,133,0.15)]",
        dot:    "bg-rose-400",
        badge:  "bg-rose-500/10 text-rose-300 border-rose-500/20",
        pulse:  "rgba(251,113,133,0.3)",
        hex:    "#fb7185",
    },
};

/* ── Tooltip flotante sobre el SVG ── */
function SvgTooltip({ bloque, visible }) {
    const c = COLOR_MAP[bloque.color];
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key={bloque.id}
                    initial={{ opacity: 0, y: 10, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0,  scale: 1   }}
                    exit={{    opacity: 0, y: 10, scale: 0.92 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="osc-partes__tooltip"
                    style={{
                        borderColor:     c.hex,
                        backgroundColor: `rgba(2,8,24,0.90)`,
                        boxShadow:       `0 0 28px ${c.pulse}`,
                    }}
                >
                    <span className="osc-partes__tooltip-icon" style={{ color: c.hex }}>
                        {bloque.icono}
                    </span>
                    <div className="osc-partes__tooltip-body">
                        <span className="osc-partes__tooltip-name" style={{ color: c.hex }}>
                            {bloque.nombre}
                        </span>
                        <span className="osc-partes__tooltip-hint">
                            Haz clic para explorar →
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── Panel lateral de detalle completo ── */
function DetallePanel({ bloque, isHover }) {
    const c = COLOR_MAP[bloque.color];
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={bloque.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0  }}
                exit={{    opacity: 0, x: -20 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className={`osc-card osc-partes__panel ${c.border} ${c.glow}`}
            >
                {/* Estado hover/click */}
                <div className="osc-partes__panel-status">
                    <span
                        className="osc-partes__panel-status-dot"
                        style={{ backgroundColor: c.hex, boxShadow: `0 0 8px ${c.hex}` }}
                    />
                    <span className="osc-partes__panel-status-text">
                        {isHover ? "Explorando" : "Seleccionado"}
                    </span>
                </div>

                {/* Cabecera */}
                <div className="osc-partes__panel-head">
                    <span className="osc-partes__panel-icon">{bloque.icono}</span>
                    <div>
                        <span className={`osc-badge ${c.badge}`}>BLOQUE ACTIVO</span>
                        <h3 className={`osc-partes__panel-title ${c.text}`}>
                            {bloque.nombre}
                        </h3>
                    </div>
                </div>

                {/* Descripción */}
                <p className="osc-partes__panel-desc">{bloque.descripcion}</p>

                {/* Especificaciones técnicas */}
                <div className="osc-partes__panel-detalles">
                    {bloque.detalles.map(d => (
                        <div key={d} className="osc-partes__panel-detalle">
                            <span
                                className="osc-partes__panel-dot"
                                style={{ backgroundColor: c.hex }}
                            />
                            <span>{d}</span>
                        </div>
                    ))}
                </div>

                {/* Barra de acento */}
                <motion.div
                    className="osc-partes__panel-bar"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: `linear-gradient(to right, ${c.hex}, transparent)` }}
                />
            </motion.div>
        </AnimatePresence>
    );
}

/* ── Tab de navegación ── */
function TabButton({ bloque, isActive, onClick }) {
    const c = COLOR_MAP[bloque.color];
    return (
        <button
            onClick={() => onClick(bloque.id)}
            className={`osc-partes__tab ${
                isActive
                    ? `osc-partes__tab--active ${c.border} ${c.bg}`
                    : "osc-partes__tab--idle"
            }`}
        >
            <span className={`osc-partes__tab-dot ${isActive ? c.dot : "bg-slate-600"}`} />
            <span className={`osc-partes__tab-label ${isActive ? c.text : "text-slate-400"}`}>
                {bloque.icono} {bloque.nombre.split("(")[0].trim()}
            </span>
        </button>
    );
}

/* ── Sección principal ── */
export default function Partes() {
    const { t } = useTranslation();
    const translatedBloques = t('partes.bloques', { returnObjects: true });
    const bloquesData = PARTES_BLOQUES.map((b, i) => ({ ...b, ...translatedBloques[i] }));

    const [activeId, setActiveId] = useState("trc");
    const [hoverId,  setHoverId]  = useState(null);

    const displayId = hoverId ?? activeId;
    const bloque    = bloquesData.find(b => b.id === displayId) ?? bloquesData[0];
    const isHover   = hoverId !== null;

    return (
        <section className="osc-section osc-section--partes" id="partes">
            <div className="osc-glow osc-glow--cyan" aria-hidden="true" />

            <div className="osc-container osc-container--wide">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--cyan">
                        {t('partes.badge')}
                    </span>
                    <h2 className="osc-section__heading">
                        {t('partes.title_l1')}<br />
                        <span className="osc-text--cyan">{t('partes.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('partes.desc')}
                    </p>
                </motion.div>

                {/* Tabs de selección rápida */}
                <motion.div
                    variants={fadeUp}
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="osc-partes__tabs"
                >
                    {bloquesData.map(b => (
                        <TabButton
                            key={b.id}
                            bloque={b}
                            isActive={activeId === b.id}
                            onClick={setActiveId}
                        />
                    ))}
                </motion.div>

                {/* Layout principal */}
                <div className="osc-partes__wrap">

                    {/* ── Columna izquierda: SVG ── */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="osc-partes__svg-col"
                    >
                        {/* Wrapper relativo para tooltip */}
                        <div className="osc-partes__svg-wrap">
                            <OsciloscopioSVG
                                activeId={displayId}
                                onHover={id => setHoverId(id)}
                                onLeave={() => setHoverId(null)}
                                onClick={id => { setActiveId(id); setHoverId(null); }}
                            />

                            {/* Tooltip flotante sobre el SVG */}
                            <SvgTooltip bloque={bloque} visible={isHover} />
                        </div>

                        {/* Hint */}
                        <p className="osc-partes__svg-hint">
                            <span
                                className="osc-dot osc-dot--sm"
                                style={{
                                    backgroundColor: COLOR_MAP[bloque.color].hex,
                                    boxShadow: `0 0 6px ${COLOR_MAP[bloque.color].hex}`,
                                    transition: "all 0.3s",
                                }}
                            />
                            Pasa el cursor · Haz click para anclar la selección
                        </p>
                    </motion.div>

                    {/* ── Columna derecha: panel de detalle ── */}
                    <motion.div
                        variants={fadeUp}
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="osc-partes__detail"
                    >
                        {/* Indicador "Explorando / Seleccionado" global */}
                        <div className="osc-partes__state-badge">
                            <motion.span
                                key={`state-${isHover}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`osc-partes__state-text ${isHover ? "text-slate-400" : COLOR_MAP[bloque.color].text}`}
                            >
                                {isHover ? "👆 Cursor sobre el diagrama" : "📌 Sección fijada"}
                            </motion.span>
                        </div>

                        <DetallePanel bloque={bloque} isHover={isHover} />

                        {/* Navegación numérica */}
                        <div className="osc-partes__nav">
                            <span className="osc-partes__nav-label">Nav:</span>
                            {bloquesData.map((b, i) => {
                                const c = COLOR_MAP[b.color];
                                const isAct = activeId === b.id;
                                return (
                                    <button
                                        key={b.id}
                                        onClick={() => setActiveId(b.id)}
                                        title={b.nombre}
                                        className="osc-partes__nav-btn"
                                        style={{
                                            borderColor: isAct ? c.hex : undefined,
                                            color:       isAct ? c.hex : undefined,
                                            boxShadow:   isAct ? `0 0 12px ${c.pulse}` : undefined,
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
