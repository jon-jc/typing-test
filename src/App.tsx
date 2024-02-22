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
      <h1 className="text-cyan-500 text-center text-2xl py-10">Typing Speed Test</h1>
      <a href="https://www.linkedin.com/in/jon-jc/" target="_blank" rel="noopener noreferrer" className="flex align-center mb-10 bg-red-200 text-center py-2 px-4 rounded-full hover:bg-red-200 hover:text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
        Made by Jonathan Cho
      </a>
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
        wpm={(totalTyped / 5) * 2}
      />
      <LinkedInButton/>
     
      
    </>
  )
}

const WordContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
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
