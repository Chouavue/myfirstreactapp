import logo from "./logo.svg";
import Header from "./header";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React with Sam. :) Hope you are liking it.
      </a>
      <Footer />
    </div>
  );
}

export default App;
