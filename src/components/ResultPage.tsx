import { motion } from "framer-motion";
import { formatPercent } from "../utils/format";
import type { currentState } from "../hooks/useEngine";

const ResultPage = ({
    state,
    errors,
    accuracy,
    total,
    className,
}: {
    state: currentState
    errors: number;
    accuracy: number;
    total: number;
    className?: string;


}) => {
    const firstOpa = { opacity: 0};
    const animate = {opacity: 1};
    const duration= {duration: 0.2};

    if (state !== "finish") {
        return null;
    }

    return(
        <motion.ul className={`flex flex-col items-center text-primary-200 space-y-3 ${className}`}>
            <motion.li 
                className="text-xl font-semibold"
                initial={firstOpa}
                animate={animate}
                transition={{...duration, delay: 0}}
                >Results</motion.li>
            <motion.li
             initial={firstOpa}
             animate={animate}
             transition={{...duration, delay: 0.3}}
            > Accuracy: {formatPercent(accuracy)}</motion.li>
            <motion.li
              initial={firstOpa}
              animate={animate}
              transition={{...duration, delay: 0.6}}
            >Errors: {errors}</motion.li>
            <motion.li
             initial={firstOpa}
             animate={animate}
             transition={{...duration, delay: 1}}
            >Typed: {total}</motion.li>
        </motion.ul>
    )
}

export default ResultPage