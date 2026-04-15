import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SPRING } from "../utils/animations";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLng = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nextLng);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="osc-lang-btn"
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(34,211,238,0.4), inset 0 0 15px rgba(34,211,238,0.2)" }}
            whileTap={{ scale: 0.95, rotate: 15 }}
            transition={SPRING}
            aria-label="Toggle language"
        >
            <span className="osc-lang-btn__text">
                {i18n.language === 'es' ? 'ES' : 'EN'}
            </span>
        </motion.button>
    );
}
