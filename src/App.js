import dictionary from "./images/dictionary-banner.jpeg";
import Dictionary from "./Dictionary";

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="hero d-flex">
            <img src={dictionary} alt="" className="img-fluid"/>
            <h1>
              Dictionary
            </h1>
        </div>

      <Dictionary defaultKeyword="Dictionary"/>

      <footer>
        <a href="https://github.com/Meerduke/dictionary-app" target="_blank" rel="noreferrer">Open source </a>
        coded by Becca Murdoch
      </footer>
    </div>
  );
}

export default App;
