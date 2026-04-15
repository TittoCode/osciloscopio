import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, SPRING } from "../utils/animations";

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section className="osc-hero" aria-label="Hero">

            <div className="osc-hero__grid" aria-hidden="true" />
            <div className="osc-hero__glow" aria-hidden="true" />

            <div className="osc-hero__content">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="osc-hero__badge"
                >
                    <span className="osc-hero__badge-line" />
                    <span className="osc-hero__badge-text">{t('hero.badge')}</span>
                    <span className="osc-hero__badge-line" />
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    className="osc-hero__heading"
                >
                    {t('hero.title_l1')}
                    <br />
                    <span className="osc-hero__heading-accent">
                        {t('hero.title_l2')}
                        <motion.span
                            className="osc-hero__heading-underline"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ ...SPRING, delay: 0.5 }}
                        />
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    className="osc-hero__sub"
                >
                    {t('hero.sub')}
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    className="osc-hero__ctas"
                >
                    <a href="#intro" className="osc-btn osc-btn--primary">
                        {t('hero.cta_start')}
                    </a>
                    <a href="#historia" className="osc-btn osc-btn--ghost">
                        {t('hero.cta_history')}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...SPRING, delay: 0.4 }}
                    className="osc-hero__wave-wrap"
                    aria-hidden="true"
                >
                    <div className="osc-hero__wave-screen">
                        <div className="osc-hero__wave-dots">
                            <span className="osc-dot osc-dot--red" />
                            <span className="osc-dot osc-dot--yellow" />
                            <span className="osc-dot osc-dot--green" />
                            <span className="osc-hero__wave-label">{t('hero.wave_label')}</span>
                        </div>

                        <div className="osc-hero__wave-viewport">
                            <svg
                                viewBox="0 0 1280 120"
                                className="osc-hero__wave-svg osc-hero__wave-svg--loop"
                                preserveAspectRatio="none"
                            >
                                {[24, 48, 72, 96].map((y) => (
                                    <line key={y} x1="0" y1={y} x2="1280" y2={y}
                                        stroke="#22c55e" strokeWidth="0.4" opacity="0.2" />
                                ))}
                                {[160, 320, 480, 640, 800, 960, 1120].map((x) => (
                                    <line key={x} x1={x} y1="0" x2={x} y2="120"
                                        stroke="#22c55e" strokeWidth="0.4" opacity="0.2" />
                                ))}
                                <path
                                    d="M0 60 C80 20,160 100,240 60 S400 20,480 60 S640 100,720 60 S880 20,960 60 S1120 100,1200 60 S1280 20,1360 60"
                                    fill="none"
                                    stroke="#4ade80"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    className="osc-wave-beam"
                                />
                                <circle r="5" fill="#4ade80" opacity="0.85" className="osc-wave-cursor">
                                    <animateMotion
                                        dur="3s"
                                        repeatCount="indefinite"
                                        path="M0 60 C80 20,160 100,240 60 S400 20,480 60 S640 100,720 60 S880 20,960 60 S1120 100,1200 60 S1280 20,1360 60"
                                    />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}