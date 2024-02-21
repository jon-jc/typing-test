import Line from "./Line";

const TypingInput = ({
    userInput,
    className,
}: {
    userInput: string;
    className: string;

}
) => {
    const typedChars = userInput.split("");

    return (
        <div className={className}>
            {typedChars.map((char, index) => {
                return <Character key={`${char}_${index}`} char={char} />;
            })}
            <Line />
        </div>
    );

};

const Character = ({char}: {char: string}) =>{
    return <span className="text-primary-200">{char}</span>
}

export default TypingInput