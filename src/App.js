import Dictionary from "./Dictionary";
import dictionary from "./images/dictionary-banner.jpeg";

import './App.css';

function App() {
  return (
    <div>
      <div className="App">
          <div className="hero d-flex justify-content-center">
            <img src={dictionary} alt="" className="img-fluid shadow d-none d-lg-block"/>
            <h1 className="mt-5">
                Dictionary
                <br />
                App
            </h1>
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
