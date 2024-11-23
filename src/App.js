import { useState } from "react";

function App() {
  const dictiory = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [result, setResult] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    const tempResult = dictiory.find(
      (item) => item.word.toLowerCase() === searchValue.toLowerCase()
    );
    if (tempResult) {
      setResult(tempResult.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
