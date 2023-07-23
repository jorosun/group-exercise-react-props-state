import Joke from "../joke";
interface ChuckJokeProps {
  jokes: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => {
  return <> {jokes.joke} </>;
};

export default ChuckJoke;
