import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import ResultPage from "./components/ResultPage";
import TypingInput from "./components/TypingInput";
import useEngine from "./hooks/useEngine";
const words = faker.random.words(10)

const App = () => {
  const {state, words} = useEngine();

  return (
    <>
      <TypingTimer timeLeft={60}/>
      <WordContainer>
       <RandomWords words={words}/>
       <TypingInput className="absolute inset-0" userInput={"test"}/>
      </WordContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}/>
      <ResultPage
        className="mt-10"
        errors={10}
        accuracy={100}
        total={200}
      />
     
      
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
  return <div className="text-slate-500">{words}</div>
}

const TypingTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-200 font-medium">Time: {timeLeft}</h2>
}

export default App
