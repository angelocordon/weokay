import { useState, useEffect } from "react";
import greetings from "./data/greetings";

export default function Greetings(): JSX.Element {
  const [greeting, setGreeting] = useState<string>("");

  const getRandomGreeting = () => {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(greeting);
  };

  useEffect(() => {
    getRandomGreeting();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-6xl font-bold leading-snug mb-20 block w-full">
        {greeting}
      </h1>
      <div className="text-right">
        <button onClick={getRandomGreeting}>Read another →</button>
      </div>
    </div>
  );
}
