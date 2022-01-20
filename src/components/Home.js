import React from "react";
import { city, username } from "../data/user";

export default function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
