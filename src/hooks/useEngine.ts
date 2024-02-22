import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTyped";
import { countErrors } from "../utils/format";


export type currentState = "start" | "run" |"finish";

const NUM_OF_WORDS = 25;
const COUNTDOWN_SEC = 60;


const useEngine = () => {
    const [ state, setState] = useState<currentState>("start");

    const { words, updateWords } = useWords(NUM_OF_WORDS);
    
    const { timeLeft, startCountdown, resetCountdown} =
     useCountdownTimer(COUNTDOWN_SEC);

    const { typed, cursor, clearTyped, totalTyped, resetTotalTyped } = useTypings(
        state !== "finish"
    );

    const [errors, setErrors] = useState(0);

    const isStarted = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const numErrors = useCallback(() => {
      const wordHit = words.substring(0, cursor);
      setErrors((prevErrors) => prevErrors + countErrors(typed, wordHit)); 
    }, [typed, words, cursor]);

    useEffect(() => {
      if (isStarted) {
        setState("run");
        startCountdown();
      }
    }, [isStarted, startCountdown]);
  
    // when the time is up, we've finished
    useEffect(() => {
      if (!timeLeft && state === "run") {
        setState("finish");
        numErrors();
      }
    }, [timeLeft, state, numErrors]);
  
    /**
     * when the current words are all filled up,
     * we generate and show another set of words
     */
    useEffect(() => {
      if (areWordsFinished) {
        numErrors();
        updateWords();
        clearTyped();
      }
    }, [clearTyped, areWordsFinished, updateWords, numErrors]);

    const restart = useCallback(() => {
      resetCountdown();
      resetTotalTyped();
      setState("start");
      setErrors(0);
      updateWords();
      clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);
  
  
  return {state, words, timeLeft, typed, errors, totalTyped, restart};
};

export default useEngine