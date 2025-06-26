import React, { useState } from "react";

const API_KEY = "YOUR_API_KEY_HERE"; // <-- Replace this with your OpenWeatherMap API key

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      if (!resp.ok) {
        throw new Error("City not found");
      }
      const data = await resp.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        background: "#f8fbff",
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,.07)",
        padding: 24,
      }}
    >
      <h2>Weather Dashboard</h2>
      <form onSubmit={fetchWeather} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: 8,
            border: "1px solid #bbb",
            borderRadius: 6,
            width: "70%",
            marginRight: 8,
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            background: "#0078d4",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get Weather
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
      {weather && (
        <div>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <div style={{ fontSize: 42, fontWeight: 700 }}>
            {Math.round(weather.main.temp)}°C
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              style={{ verticalAlign: "middle" }}
            />
            <span style={{ fontSize: 20, textTransform: "capitalize" }}>
              {weather.weather[0].description}
            </span>
          </div>
          <div>Humidity: {weather.main.humidity}%</div>
          <div>Wind: {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
}