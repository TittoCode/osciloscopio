/* components/ComoUsar.jsx */
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, VIEWPORT } from "../utils/animations";
import { PASOS_USO } from "../utils/constants";

const VOLTS_OPTIONS = [0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5];

function Calculadora() {
    const { t } = useTranslation();
    const text = t('como_usar.calculator', { returnObjects: true });

    const [divs,   setDivs]   = useState(4);
    const [vdiv,   setVdiv]   = useState(1);
    const [sonda,  setSonda]  = useState(10);
    const vpp = (divs * vdiv * sonda).toFixed(3);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={VIEWPORT}
            className="osc-card osc-calc"
        >
            <div className="osc-window-dots">
                <span className="osc-dot osc-dot--red" />
                <span className="osc-dot osc-dot--yellow" />
                <span className="osc-dot osc-dot--green" />
                <span className="osc-window-label">{text.title}</span>
            </div>

            <div className="osc-calc__body">
                <div className="osc-calc__inputs">
                    {/* Divisiones */}
                    <label className="osc-calc__label">
                        <span className="osc-calc__label-text">{text.div_v}</span>
                        <div className="osc-calc__slider-wrap">
                            <input
                                type="range" min="1" max="10" step="0.5" value={divs}
                                onChange={e => setDivs(Number(e.target.value))}
                                className="osc-calc__range"
                            />
                            <span className="osc-calc__val osc-text--green">{divs} div</span>
                        </div>
                    </label>

                    {/* Volts/div */}
                    <label className="osc-calc__label">
                        <span className="osc-calc__label-text">{text.scale}</span>
                        <select
                            value={vdiv}
                            onChange={e => setVdiv(Number(e.target.value))}
                            className="osc-calc__select"
                        >
                            {VOLTS_OPTIONS.map(v => (
                                <option key={v} value={v}>
                                    {v < 1 ? `${v * 1000} mV/div` : `${v} V/div`}
                                </option>
                            ))}
                        </select>
                    </label>

                    {/* Factor sonda */}
                    <label className="osc-calc__label">
                        <span className="osc-calc__label-text">{text.probe}</span>
                        <div className="osc-calc__sonda-wrap">
                            {[1, 10].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setSonda(f)}
                                    className={`osc-calc__sonda-btn ${sonda === f ? "osc-calc__sonda-btn--active" : ""}`}
                                >
                                    ×{f}
                                </button>
                            ))}
                        </div>
                    </label>
                </div>

                {/* Resultado */}
                <div className="osc-calc__result">
                    <p className="osc-calc__result-label">{text.result_vpp}</p>
                    <motion.p
                        key={vpp}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="osc-calc__result-val"
                    >
                        {vpp}V
                    </motion.p>
                    <p className="osc-calc__result-formula">
                        {divs} div × {vdiv < 1 ? `${vdiv * 1000}mV` : `${vdiv}V`}/div × ×{sonda}
                    </p>
                    {/* Pantalla mini */}
                    <svg viewBox="0 0 200 80" className="osc-calc__screen">
                        {[20, 40, 60].map(y => (
                            <line key={y} x1="10" y1={y} x2="190" y2={y}
                                stroke="#1a3a1a" strokeWidth="0.5" strokeDasharray="2 4" />
                        ))}
                        <line x1="10" y1="40" x2="190" y2="40" stroke="#2a5a2a" strokeWidth="0.8" />
                        <motion.path
                            d="M10 40 C30 15,50 65,70 40 S110 15,130 40 S170 65,190 40"
                            fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            key={vpp}
                        />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}

function PasoUso({ paso, index }) {
    return (
        <motion.div
            variants={fadeUp}
            custom={index * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={{ x: 6 }}
            className="osc-tutorial__paso"
        >
            <div className="osc-tutorial__num">{paso.num}</div>
            <div className="osc-tutorial__content">
                <h3 className="osc-tutorial__title">{paso.titulo}</h3>
                <p className="osc-tutorial__body">{paso.body}</p>
                <div className="osc-tutorial__tip">
                    <span className="osc-tutorial__tip-icon">💡</span>
                    <span>{paso.tip}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function ComoUsar() {
    const { t } = useTranslation();
    const translatedPasos = t('como_usar.pasos', { returnObjects: true });
    const pasos = PASOS_USO.map((p, i) => ({ ...p, ...translatedPasos[i] }));
    const tipBox = t('como_usar.tip_box', { returnObjects: true });

    return (
        <section className="osc-section osc-section--como-usar" id="como-usar">
            <div className="osc-bg-grid" aria-hidden="true" />
            <div className="osc-glow osc-glow--green" aria-hidden="true" />

            <div className="osc-container osc-container--wide">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--green">{t('como_usar.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('como_usar.title_l1')}<br />
                        <span className="osc-text--green">{t('como_usar.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('como_usar.desc')}
                    </p>
                </motion.div>

                <div className="osc-tutorial__grid">
                    <div className="osc-tutorial__list">
                        {pasos.map((paso, i) => (
                            <PasoUso key={paso.num} paso={paso} index={i} />
                        ))}
                    </div>

                    <div className="osc-tutorial__side">
                        <Calculadora />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={VIEWPORT}
                            className="osc-card osc-note"
                        >
                            <div className="osc-note__header">
                                <span>🔬</span>
                                <span className="osc-note__label">{tipBox.title}</span>
                            </div>
                            <p className="osc-note__body">
                                {tipBox.p1}
                                <strong className="osc-text--green">{tipBox.s1}</strong>
                                {tipBox.p2}
                                <em>{tipBox.em}</em>
                                {tipBox.p3}
                                <strong className="osc-text--amber">{tipBox.s2}</strong>
                                {tipBox.p4}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
