import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>D i ctio na ry</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="plants" />
      </main>
      <footer className="App-footer">
        {" "}
        coded by Maria Melo | open-sourced{" "}
        <a
          href="https://github.com/mariamelomaga/dictionary-project-"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        {}
        and hosted on{" "}
        <a href="https://priceless-tesla-8f038b.netlify.app/" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
