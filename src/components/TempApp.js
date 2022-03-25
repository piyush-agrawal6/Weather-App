import React, { useEffect, useState } from "react";
import "./TempApp.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f1cc45adf32e2485e18a3ae625dce4af`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="container">
      <div className="box">
        <div className="inputData">
          <input
            className="input"
            type="search"
            value={search}
            placeholder="Search city"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="error">No data found !</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-location-dot"></i> {search}
              </h2>
              <h1 className="temp">{city.temp} cel </h1>
              <h3 className="temp-min-max">
                Min : {city.temp_min} cel | Max : {city.temp_max} cel
              </h3>
              <h1 className="pressure">Pressure :{city.pressure} </h1>
              <h1 className="humidity">Humidity : {city.humidity}</h1>
              <h1 className="sealevel">Sea Level :{city.sea_level} </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TempApp;
