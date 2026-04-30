
import { useState } from "react";
import "./App.css";


type Joke = {
  setup: string;
  punchline: string;
};

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const data: Joke = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <div className="card">
        <h1>🤣 Joke App 😂
        </h1>

        <button onClick={getJoke}>
          {loading ? "Loading..." : "Get a Joke"}
        </button>

        {joke && (
          <div className="joke">
            <h2>{joke.setup}</h2>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;




