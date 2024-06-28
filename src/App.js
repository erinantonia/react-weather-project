import "./App.css";
import Weather from "./Weather.js";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Auckland" />

      <footer>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/erinantonia"
            target="_blank"
            rel="noreferrer"
          >
            Erin Allen
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/erinantonia/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github.
          </a>
        </p>
      </footer>
    </div>
  );
}
