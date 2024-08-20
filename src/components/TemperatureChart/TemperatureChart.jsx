import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { fetchWeatherByCityForWeek } from "utils/api";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const TemperatureChart = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const fetchData = await fetchWeatherByCityForWeek(selectedCity.name);
      const data = fetchData.data.list;
      
      setWeatherData(data);
    };

    fetchWeather();
  }, [selectedCity]);

  if (!weatherData || weatherData.length === 0) {
    return <p>No data available</p>;
  }

  const labels = weatherData.map((data) => {
    const date = new Date(data.dt_txt);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${dayOfWeek} ${time}`;
  });
  const temperatures = weatherData.map((data) => Math.round(data.main.temp));

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temperatures,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default TemperatureChart;
