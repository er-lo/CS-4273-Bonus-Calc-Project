"use client";
import { useState } from "react";

export default function Home() {
  const calcButtons = ["AC", "C", "log", "√", "7", "8", "9", "%", "4", "5", "6", "/", "1", "2", "3", "-", "±", "0", ".", "+"];

  const [calculatorInput, setCalculatorInput] = useState("");

  const handleButtonClick = (character: string) => {
    if (character === 'C') {
      // clear the last number
      const currentLength = calculatorInput.length;
      let tempString = calculatorInput.substring(0, currentLength - 1);
      setCalculatorInput(tempString);
    } else if (character === 'AC') {
      // completely clear display
      setCalculatorInput("")
    } else {
      // adds whatever is added into the calculator onto the "display"
      setCalculatorInput((prev) => prev + character);
    }
  };

  return (
    <div className="bg-[#212327] min-h-screen flex flex-col items-center justify-center">
      <div className="rounded-lg p-6 w-80 pb-0">
        <div className="text-right mb-4 p-4 bg-[#212327] rounded text-3xl font-mono">
          {calculatorInput || "0"}
        </div>
      </div>
      <div className="bg-[#27292e] rounded-t-lg p-6 w-80">
        <div className=" grid grid-cols-4 gap-3 text-xl">
          {calcButtons.map((character) => (
            <button
              key={character}
              onClick={() => handleButtonClick(character)}
              className="bg-zinc-700 text-white font-bold p-4 rounded-full hover:bg-zinc-600"
            >
              {character}
            </button>
          ))}
          <button
            className="col-span-4 bg-indigo-800 text-white font-bold p-4 rounded-full hover:bg-indigo-900"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
