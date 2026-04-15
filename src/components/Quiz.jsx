import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, SPRING, VIEWPORT } from "../utils/animations";
import { QUIZ_QUESTIONS } from "../utils/constants";

const RESULT_DATA = [
    { min: 0, max: 2, emoji: "📡", msg: "Sigue estudiando — la señal aún no es estable.",   color: "rose" },
    { min: 3, max: 3, emoji: "⚡", msg: "¡Bien! El haz está tomando forma.",                 color: "amber" },
    { min: 4, max: 4, emoji: "🎯", msg: "¡Muy bien! Casi dominás el osciloscopio.",         color: "cyan" },
    { min: 5, max: 5, emoji: "🏆", msg: "¡Perfecto! Señal completamente estabilizada.",      color: "green" },
];

const COLOR = {
    green: { border: "border-green-500/40", bg: "bg-green-500/10", text: "text-green-400", glow: "shadow-[0_0_40px_rgba(34,197,94,0.15)]" },
    cyan:  { border: "border-cyan-500/40",  bg: "bg-cyan-500/10",  text: "text-cyan-400",  glow: "shadow-[0_0_40px_rgba(34,211,238,0.15)]" },
    amber: { border: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-400", glow: "shadow-[0_0_40px_rgba(251,191,36,0.15)]" },
    rose:  { border: "border-rose-500/40",  bg: "bg-rose-500/10",  text: "text-rose-400",  glow: "shadow-[0_0_40px_rgba(251,113,133,0.15)]" },
};

function QuizCard({ question, onAnswer, answered }) {
    return (
        <div className="osc-quiz__card">
            <p className="osc-quiz__question">{question.pregunta}</p>
            <div className="osc-quiz__options">
                {question.opciones.map((op, i) => {
                    const isCorrect = i === question.correcta;
                    const isSelected = answered === i;
                    let style = "osc-quiz__option";
                    if (answered !== null) {
                        if (isCorrect) style += " osc-quiz__option--correct";
                        else if (isSelected) style += " osc-quiz__option--wrong";
                        else style += " osc-quiz__option--dim";
                    }
                    return (
                        <motion.button
                            key={i}
                            id={`quiz-opt-${question.id}-${i}`}
                            whileHover={answered === null ? { scale: 1.02, x: 4 } : {}}
                            whileTap={answered === null ? { scale: 0.98 } : {}}
                            onClick={() => answered === null && onAnswer(i)}
                            className={style}
                            disabled={answered !== null}
                        >
                            <span className="osc-quiz__option-letter">
                                {String.fromCharCode(65 + i)}
                            </span>
                            {op}
                        </motion.button>
                    );
                })}
            </div>
            <AnimatePresence>
                {answered !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ ...SPRING }}
                        className={`osc-quiz__explain ${answered === question.correcta ? "osc-quiz__explain--ok" : "osc-quiz__explain--fail"}`}
                    >
                        <span className="osc-quiz__explain-icon">
                            {answered === question.correcta ? "✓" : "✗"}
                        </span>
                        {question.explicacion}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ResultScreen({ score, total, onReset }) {
    const { t } = useTranslation();
    const translatedResults = t('quiz.results', { returnObjects: true });
    
    const resIdx = RESULT_DATA.findIndex(r => score >= r.min && score <= r.max);
    const index = resIdx >= 0 ? resIdx : 0;
    const res = RESULT_DATA[index];
    const c = COLOR[res.color];
    const msg = translatedResults[index].msg;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...SPRING }}
            className={`osc-quiz__result osc-card ${c.border} ${c.glow}`}
        >
            <div className="osc-quiz__result-score-wrap">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ...SPRING, delay: 0.2 }}
                    className="osc-quiz__result-emoji"
                >
                    {res.emoji}
                </motion.div>
                <div>
                    <p className={`osc-quiz__result-score ${c.text}`}>
                        {score} / {total}
                    </p>
                    <p className="osc-quiz__result-msg">{msg}</p>
                </div>
            </div>

            <div className="osc-quiz__result-bar-track">
                <motion.div
                    className={`osc-quiz__result-bar-fill ${c.bg.replace("bg-", "bg-")}`}
                    style={{ width: `${(score / total) * 100}%`, background: undefined }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ ...SPRING, delay: 0.4 }}
                />
            </div>

            <motion.button
                id="quiz-reset-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onReset}
                className="osc-btn osc-btn--primary osc-quiz__result-btn"
            >
                {t('quiz.retry')}
            </motion.button>
        </motion.div>
    );
}

export default function Quiz() {
    const { t } = useTranslation();
    const translatedQuestions = t('quiz.questions', { returnObjects: true });
    const questions = QUIZ_QUESTIONS.map((q, i) => ({ ...q, ...translatedQuestions[i] }));

    const [current,  setCurrent]  = useState(0);
    const [answers,  setAnswers]  = useState([]);
    const [answered, setAnswered] = useState(null);
    const [finished, setFinished] = useState(false);

    const question = questions[current];
    const score    = answers.filter((a, i) => a === questions[i].correcta).length;

    function handleAnswer(idx) {
        setAnswered(idx);
        setTimeout(() => {
            const next = current + 1;
            setAnswers(prev => [...prev, idx]);
            if (next >= questions.length) {
                setFinished(true);
            } else {
                setCurrent(next);
                setAnswered(null);
            }
        }, 1600);
    }

    function handleReset() {
        setCurrent(0);
        setAnswers([]);
        setAnswered(null);
        setFinished(false);
    }

    return (
        <section className="osc-section osc-section--quiz" id="quiz">
            <div className="osc-bg-dots" aria-hidden="true" />
            <div className="osc-glow osc-glow--green" aria-hidden="true" />

            <div className="osc-container osc-container--narrow">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...SPRING }}
                    viewport={VIEWPORT}
                    className="osc-section__header"
                >
                    <span className="osc-badge-text osc-badge-text--green">{t('quiz.badge')}</span>
                    <h2 className="osc-section__heading">
                        {t('quiz.title_l1')}<br />
                        <span className="osc-text--green">{t('quiz.title_l2')}</span>
                    </h2>
                    <p className="osc-section__desc">
                        {t('quiz.desc')}
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!finished ? (
                        <motion.div
                            key={`q-${current}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...SPRING }}
                        >
                            <div className="osc-quiz__progress">
                                <span className="osc-quiz__progress-label">
                                    {t('quiz.question_count_1')} {current + 1} {t('quiz.question_count_2')} {questions.length}
                                </span>
                                <div className="osc-quiz__progress-bar">
                                    <motion.div
                                        className="osc-quiz__progress-fill"
                                        animate={{ width: `${((current) / questions.length) * 100}%` }}
                                        transition={{ ...SPRING }}
                                    />
                                </div>
                            </div>
                            <div className="osc-card osc-quiz__wrapper">
                                <div className="osc-window-dots">
                                    <span className="osc-dot osc-dot--red" />
                                    <span className="osc-dot osc-dot--yellow" />
                                    <span className="osc-dot osc-dot--green" />
                                    <span className="osc-window-label">Quiz · MO-1227 · Autoevaluación</span>
                                </div>
                                <QuizCard
                                    question={question}
                                    onAnswer={handleAnswer}
                                    answered={answered}
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ResultScreen
                                score={score}
                                total={questions.length}
                                onReset={handleReset}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
