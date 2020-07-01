import React, { useState, useEffect } from "react";
import LaunchItem from "./components/LaunchItem";
import axios from "axios";

function LaunchCard() {
  const [lauchData, setLaunchData] = useState([]);
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/launches").then(response => {
      const spacex = response.data;
      console.log(response.data);
      setLaunchData(spacex);
    });
  }, []);
  return (
    <div>
      {lauchData.map(data => {
        return <LaunchItem data={data} />;
      })}
    </div>
  );
}

export default LaunchCard;