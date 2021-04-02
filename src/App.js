import Dictionary from "./Dictionary";
import dictionary from "./images/dictionary-banner.jpeg";

import './App.css';

function App() {
  return (
    <div>
      <div className="App">
          <div className="hero">
            <h1>
                Dictionary App
            </h1>
            <img src={dictionary} alt="" className="img-fluid shadow"/>
          </div>

          <Dictionary defaultKeyword="Dictionary"/>

        <footer>
          <a href="https://github.com/Meerduke/dictionary-app" alt="Link to git repository" title="git repository" target="_blank" rel="noreferrer">Open source</a> coded by Becca Murdoch
        </footer>
      </div>
    </div>
  );
}

export default App;
