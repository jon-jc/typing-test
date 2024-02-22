import RestartButton from "./components/RestartButton";
import ResultPage from "./components/ResultPage";
import TypingInput from "./components/TypingInput";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/format";
import { FaLinkedin } from 'react-icons/fa';

const App = () => {

  const {state, words, timeLeft, typed, errors, restart, totalTyped} = useEngine();
  
  return (
    <>
      <h1 className="text-cyan-500 text-center text-2xl py-20">Typing Speed Test</h1>
      <TypingTimer timeLeft={timeLeft}/>
      <WordContainer>
       <RandomWords words={words}/>
       <TypingInput className="absolute inset-0 w-full" words = {words} userInput={typed}/>
      </WordContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}/>
      <ResultPage
        state = {state}
        className="mt-10"
        errors={errors}
        accuracy={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
      <LinkedInButton/>
     
      
    </>
  )
}

const WordContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl mt-3 leading-relaxed">
      {children}
    </div>
  );
};

const RandomWords = ({words}: {words: string}) =>{
  return <div className="text-cyan-500">{words}</div>
}

const TypingTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-cyan-500 font-medium">Time: {timeLeft}</h2>
}

const LinkedInButton = () => {
  return (
    <a href="https://www.linkedin.com/in/jon-jc/" target="_blank" rel="noopener noreferrer" className="flex justify-center text-center py-20">
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <FaLinkedin className="text-xl" />
      </button>
    </a>
  );
};


export default App;
