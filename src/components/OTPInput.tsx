import { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNTS = 6;

const OTPInput = () => {

  const ref = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    ref.current[0]?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if(e.key === 'Backspace' && !inputArr[idx] && idx > 0){
      ref.current[idx - 1]?.focus();

    }
  }
 

  const handleOnChange = (value: string, idx: number) => {
    if(isNaN(Number(value))) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[idx] = newValue.slice(-1);
    setInputArr(newArr);    
    newValue && ref.current[idx + 1]?.focus();
  }

  const [inputArr, setInputArr] = useState<string[]>(new Array(OTP_DIGIT_COUNTS).fill(""));
  return (
    <div className="flex items-center p-2 gap-2 flex-col">
      <h1 className="text-4xl font-bold">OTP Input</h1>
      <div className="flex gap-2">
        {inputArr.map((_input, idx) => (
          <input
            ref={(input) => { ref.current[idx] = input; }} 
            className="border border-black size-[50px] text-[30px] text-center p-2" 
            key={idx} 
            type="text"
            value={inputArr[idx]}
            onChange={(e) => handleOnChange(e.target.value,idx)}
            onKeyDown={(e) => handleKeyDown(e,idx)}
           />
        ))}
      </div>
    </div>
  );
}

export default OTPInput;
