import React from "react";

type WeatherBlockProps = {
  data: {
    location: { name: string; country: string };
    current: { temp_c: number; condition: { text: string; icon: string }; wind_kph: number; humidity: number };
  };
};

const WeatherBlock: React.FC<WeatherBlockProps> = ({ data }) => {
  return (
    <div className="bg-stone-800 p-8 rounded-lg shadow-xl w-full max-w-md mx-auto mt-8 text-center">
      <h2 className="text-2xl font-semibold">{data.location.name}, {data.location.country}</h2>
      <div className="flex items-center justify-center mt-4 space-x-6">
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
          className="w-24 h-24"
        />
        <div>
          <p className="text-6xl font-bold">{data.current.temp_c}°C</p>
          <p className="text-zinc-400 text-xl">{data.current.condition.text}</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-zinc-400">
        <p>Wind: {data.current.wind_kph} km/h</p>
        <p>Humidity: {data.current.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherBlock;
