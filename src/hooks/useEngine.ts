import { useState } from "react";
import useWords from "./useWords";


export type currentState = "start" | "run" |"finish";

const NUM_OF_WORDS = 12;


const useEngine = () => {
    const [state, setState] = useState<currentState>("start");

    const { words, updateWords } = useWords(NUM_OF_WORDS);
  
  
  
  return {state, words};
}

export default useEngine