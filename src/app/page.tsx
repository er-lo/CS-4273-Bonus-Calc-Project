"use client";
import { useState } from "react";

export default function Home() {
  const calcButtons = ["AC", "C", "log", "√", "7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "-", "±", "0", ".", "+"];

  const [calculatorInput, setCalculatorInput] = useState("");

  const handleButtonClick = (character: string) => {
    console.log("Button clicked:", character); // Debugging: Log button click

    if (character === "C") {
      // Clear the last character
      setCalculatorInput((prev) => prev.slice(0, -1));
    } else if (character === "AC") {
      // Clear everything
      setCalculatorInput("");
    } else if (character === "√") {
      // Calculate the square root immediately
      try {
        const number = parseFloat(calculatorInput);
        if (isNaN(number)) {
          alert("Invalid input! Please enter a number first.");
          return;
        }
        if (number < 0) {
          alert("Square root of negative numbers is not allowed!");
          return;
        }
        setCalculatorInput(Math.sqrt(number).toString());
      } catch (error) {
        alert("An error occurred while calculating the square root.");
      }
    } else if (character === "log") {
      // Calculate the square root immediately
      try {
        const number = parseFloat(calculatorInput);
        if (isNaN(number)) {
          alert("Invalid input! Please enter a number first.");
          return;
        }
        if (number < 0) {
          alert("logs of negative numbers is not allowed.");
          return;
        }
        setCalculatorInput((Math.log(number)/Math.log(10)).toString());
      } catch (error) {
        alert("An error occurred while calculating the log.");
      }
    } else if (character === "±") {
      // Toggle the sign of the number
      try {
        if (calculatorInput === "") {
          alert("Please enter a number first!");
          return;
        }
        const number = parseFloat(calculatorInput);
        if (isNaN(number)) {
          alert("Invalid input! Please enter a valid number.");
          return;
        }
        setCalculatorInput((-1 * number).toString());
      } catch (error) {
        alert("An error occurred while toggling the sign.");
      }
    } else if (character === "=") {
      // Evaluate the input
      try {
        console.log("Evaluating input:", calculatorInput); // Debugging: Log input to evaluate
        const result = eval(calculatorInput); // Evaluates valid math expressions
        console.log("Result:", result); // Debugging: Log the result
        setCalculatorInput(result.toString()); // Update display with result
      } catch (error) {
        console.error("Evaluation error:", error); // Debugging: Log error
        alert("Invalid expression! Please check your input.");
      }
    } else {
      // Append the clicked character to the input, but limit to 8 digits
      setCalculatorInput((prev) => {
        // Count the number of digits currently in the input
        const digitCount = prev.replace(/[^0-9]/g, "").length;

        // Allow appending only if the digit count is less than 8
        if (digitCount >= 8) {
          alert("Maximum input limit of 8 digits reached.");
          return prev;
        }

        return prev + character;
      });
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
        <div className="grid grid-cols-4 gap-3 text-xl">
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
            onClick={() => handleButtonClick("=")}
            className="col-span-4 bg-indigo-800 text-white font-bold p-4 rounded-full hover:bg-indigo-900"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
