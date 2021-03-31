import dictionary from "./images/open-dictionary.png";

import './App.css';

function App() {
  return (
    <div className="d-flex justify-content-evenly hero">
      <img src={dictionary} alt="" className="img-fluid hero-image"/>
      <h1>
        Dictionary
      </h1>
    </div>
  );
}

export default App;
