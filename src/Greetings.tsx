import greetings from "./data/greetings";

export default function Greetings(): JSX.Element {
  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  return (
    <h1 className="text-6xl font-bold text-white leading-snug">
      {getRandomGreeting()}
    </h1>
  );
}
