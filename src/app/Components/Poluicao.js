'use client';
import { useState, useEffect } from 'react';
import { getWeathers, addWeather, updateWeather, deleteWeather } from "../utils/api";
import { v4 as uuid } from 'uuid';
import styles from "./poluicao.module.css";
import Weather from './weather';

const Poluicao = ({ cidades }) => {
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);

  const [weathers, setWeathers] = useState(null);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    if (cidades) {
      const fetchAQIData = async () => {
        try {
          const url = `https://api.waqi.info/feed/${encodeURIComponent(cidades)}/?token=7e6a7ed24e1e4fcadb7b32f9eb48c8faad9873cf`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.status === 'ok' && data.data) {
            setAqiData(data.data);
            setError(null);
          } else {
            setError(data.data || 'No data available for this location');
            setAqiData(null);
          }
        } catch (error) {
          console.error('Error fetching AQI data:', error);
          setError('Failed to fetch data');
          setAqiData(null);
        }
      };

      fetchAQIData();
    }
  }, [cidades]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeathers();
        setWeathers(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function changeTemperature(event) {
    setTemperature(event.target.value);
  }

  function changeCondition(event) {
    setCondition(event.target.value);
  }

  function changeID(event) {
    setID(event.target.value);
  }

  function handleAddWeather(event) {
    event.preventDefault();
    let q = {
      id,
      city,
      temperature,
      condition
    };

    addWeather(q).then((status) => {
      if (status === 201) {
        getWeathers().then((data) => setWeathers(data));
      }
    });
  }

  function handleUpdateWeather(event) {
    event.preventDefault();
    let q = { id, city, temperature, condition };

    updateWeather(q).then((status) => {
      if (status === 200) {
        getWeathers().then((data) => setWeathers(data));
      }
    });
  }

  function handleDeleteWeather(event) {
    event.preventDefault();
    deleteWeather(id).then((status) => {
      if (status === 200) {
        getWeathers().then((data) => setWeathers(data));
      }
    });
  }

  return (
    <>
      <div className={styles.divAPI}>
        {error && <p className={styles.error}>Error: {error}</p>}
        {aqiData ? (
          <div className={styles.divAQI}>
            <h2>Air Quality Data for {aqiData.city && aqiData.city.name}</h2>
            <p>AQI: {aqiData.aqi}</p>
            <p>Temperature: {aqiData.iaqi.t && aqiData.iaqi.t.v} °C</p>
            <p>Humidity: {aqiData.iaqi.h && aqiData.iaqi.h.v}%</p>
            <p>Atmospheric Pressure: {aqiData.iaqi.p && aqiData.iaqi.p.v} hPa</p>
            <p>Wind Speed: {aqiData.iaqi.w && aqiData.iaqi.w.v} m/s</p>
          </div>
        ) : (
          <p>Loading AQI data...</p>
        )}
      </div>
      <br /><br /><br />
      <hr />
      <br /><br /><br />
      <div>
        <h1 className={styles.formAPI}>Informe os Dados da Cidade</h1>
          <form className={styles.formAPI}>
            <p>Id: <br/><input type='text' value={id} onChange={changeID} /></p>
            <p>City: <br/><input type='text' value={city} onChange={changeCity} /></p>
            <p>Temperature: <br/><input type='text' value={temperature} onChange={changeTemperature} /></p>
            <p>Condition: <br/><input type='text' value={condition} onChange={changeCondition} /></p>
            <div className={styles.buttons}>
            <button onClick={handleAddWeather} className={styles.btnCreate}>Create</button>
            <button onClick={handleUpdateWeather} className={styles.btnUpdate}>Update</button>
            <button onClick={handleDeleteWeather} className={styles.btnDel}>Delete</button>
            </div>
          </form>
        <section className={styles.sectionAPI}>
          {weathers ? (
            weathers.map((q) => (
              <Weather key={q.id} weather={q} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Poluicao;
