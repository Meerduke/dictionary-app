import dictionary from "./images/open-dictionary.png";
import Dictionary from "./Dictionary";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid d-flex justify-content-evenly hero">
        <img src={dictionary} alt="" className="img-fluid hero-image"/>
        <h1>
          Dictionary
        </h1>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer>
        Open source coded by Becca Murdoch
      </footer>
    </div>
  );
}

export default App;
