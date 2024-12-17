"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import WeatherBlock from "@/components/WeatherBlock";

type WeatherData = {
  location: { name: string; country: string };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
    humidity: number;
  };
};

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (city: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    try {
      setError("");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        setError("An unknown error occurred");
      }
      setWeatherData(null);
    }
  };

  return (
    <main className="min-h-screen text-zinc-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Weather App</h1>
      <Search onSearch={fetchWeather} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {weatherData ? (
        <WeatherBlock data={weatherData} />
      ) : (
        <p className="text-zinc-400 text-center">Search for a city...</p>
      )}
      <Footer />
    </main>
  );
}
