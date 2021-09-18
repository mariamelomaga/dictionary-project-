import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{" "}
        <h1>D i ctio na ry</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="sun" />
      </main>
      <footer className="App-footer"> coded by Maria Melo</footer>
    </div>
  );
}
