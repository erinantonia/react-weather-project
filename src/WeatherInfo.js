import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} </h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <FormattedDate date={props.data.date} />
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9055/9055356.png"
            width="100"
            alt="sun icon"
          ></img>
        </div>
        <div className="col-3 d-flex">
          {" "}
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
