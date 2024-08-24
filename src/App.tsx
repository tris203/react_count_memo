import { useEffect, memo, useState } from "react";
import "./App.css";

const words = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function App() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {words.map((word, index) => (
        <MemoizedWords
          key={index}
          word={word}
          isActive={index == highlightIndex}
        />
      ))}
    </div>
  );
}

const MemoizedWords = memo(Words);

function Words({ word, isActive }: { word: string; isActive: boolean }) {
  console.log(word, isActive);
  return (
    <div key={word} className={`${isActive ? "highlight" : ""}`}>
      {word}
    </div>
  );
}

export default App;
