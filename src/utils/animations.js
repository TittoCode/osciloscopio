export const SPRING = { type: "spring", stiffness: 100, damping: 20, mass: 1 };
export const SPRING_FAST = { type: "spring", stiffness: 200, damping: 22, mass: 0.8 };

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { ...SPRING, delay: i * 0.12 },
    }),
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, delay },
    }),
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ...SPRING },
    },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { ...SPRING, delay },
    }),
};

export const springIn = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...SPRING, delay: i * 0.1 },
    }),
};

export const springSlide = {
    hidden: { opacity: 0, x: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { ...SPRING, delay },
    }),
};

export const VIEWPORT = { once: true };
export const VIEWPORT_MARGIN = { once: true, margin: "-80px" };