import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        di ctio na ry
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"> coded by Maria Melo</footer>
    </div>
  );
}
