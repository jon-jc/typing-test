import { useCallback, useEffect, useState, useRef } from "react"


const isKeyboard = (code: string) => {
    return (
        code.startsWith("Key")||
        code.startsWith("Digit")||
        code === "Backspace"||
        code === "space"
    );
};



const useTyped = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0)
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0);

    const keyHandle = useCallback(
        ({ key, code }: KeyboardEvent) => {
            if (!enabled || !isKeyboard(code)) {
              return;
            }
      
            switch (key) {
              case "Backspace":
                setTyped((prev) => prev.slice(0, -1));
                setCursor((cursor) => cursor - 1);
                totalTyped.current -= 1;
                break;
              default:
                setTyped((prev) => prev.concat(key));
                setCursor((cursor) => cursor + 1);
                totalTyped.current += 1;
            }
          },
          [enabled]
        );
      
        const clearTyped = useCallback(() => {
          setTyped("");
          setCursor(0);
        }, []);
      
        const resetTotalTyped = useCallback(() => {
          totalTyped.current = 0;
        }, []);
      
  
        useEffect(() => {
          window.addEventListener("keydown", keyHandle);

          return () => {
            window.removeEventListener("keydown", keyHandle);
          };
        }, [keyHandle]);
      
        return {
          typed,
          cursor,
          clearTyped,
          resetTotalTyped,
          totalTyped: totalTyped.current,
        };
      };
      
export default useTyped;