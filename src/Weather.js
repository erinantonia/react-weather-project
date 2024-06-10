import React from "react";
import "./Weather.css";

//bootstrap btn

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Search a city..."></input>
        <input type="submit" value="Search"></input>
      </form>
      <h1>Auckland</h1>
    </div>
  );
}
