import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import ResultPage from "./components/ResultPage";
import TypingInput from "./components/TypingInput";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/format";
const words = faker.random.words(10)

const App = () => {

  const {state, words, timeLeft, typed, errors, restart, totalTyped} = useEngine();
  
  return (
    <>
      <h1 className="text-cyan-500 text-center text-2xl py-20">Kyun's Typing Test</h1>
      <TypingTimer timeLeft={timeLeft}/>
      <WordContainer>
       <RandomWords words={words}/>
       <TypingInput className="absolute inset-0" words = {words} userInput={typed}/>
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
     
      
    </>
  )
}

const WordContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="break-keep text-balance relative text-3xl max-w-xl leading-relaxed mt-3">
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

export default App
