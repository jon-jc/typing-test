import Line from "./Line";
import cn from 'classnames';
const TypingInput = ({
    userInput,
    className,
    words,
}: {
    userInput: string;
    words: string
    className?: string;

}) => {
    const typedChars = userInput.split("");

    return (
        <div className={className}>
            {typedChars.map((char, index) => {
                return <Character key={`${char}_${index}`} 
                actual={char}
                expected={words[index]} 
                />
                
            })}
            <Line />
        </div>
    );

};

const Character = ({
    actual,
    expected,
  }: {
    actual: string;
    expected: string;
  }) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";
  
    return (
      <span
        className={cn({
          "text-red-500": !isCorrect && !isWhiteSpace,
          "text-primary-400": isCorrect && !isWhiteSpace,
          "bg-red-500/50": !isCorrect && isWhiteSpace,
        })}
      >
        {expected}
      </span>
    );
  };
  
  export default TypingInput;