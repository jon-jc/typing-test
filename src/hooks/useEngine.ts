import { useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTyped";


export type currentState = "start" | "run" |"finish";

const NUM_OF_WORDS = 12;
const COUNTDOWN_SEC = 40;


const useEngine = () => {
    const [ state, setState] = useState<currentState>("start");

    const { words, updateWords } = useWords(NUM_OF_WORDS);
    
    const { timeLeft, startCountdown, resetCountdown} =
     useCountdownTimer(COUNTDOWN_SEC);

    const { typed, cursor, clearTyped, totalTyped, resetTotalTyped } = useTypings(
        state !== "finish"
    );
  
  
  return {state, words, timeLeft, typed};
}

export default useEngine