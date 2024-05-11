'use client'
import { useState, useEffect } from 'react';
import styles from "./poluicao.module.css";

const Poluicao = ({ city }) => {
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAQIData = async () => {
    if (!city) {
      setError(null);
      setAqiData(null);
      return;
    }

    try {
      const url = `https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=7e6a7ed24e1e4fcadb7b32f9eb48c8faad9873cf`;
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
      console.error('Erro ao buscar dados do AQI:', error);
      setError('Failed to fetch data');
      setAqiData(null);
    }
  };

  useEffect(() => {
    fetchAQIData();
  }, [city]);

  if (error) {
    return <p className={styles.erro}>Error: {error}</p>;
  }

  return (
    <div className={styles.divAPI}>
      {aqiData ? (
        <div className={styles.divAQI}>
          <h2>Dados de Qualidade do Ar para {aqiData.city && aqiData.city.name}</h2>
          <p>Índice de Qualidade do Ar (AQI): {aqiData.aqi}</p>
          <p>Temperatura: {aqiData.iaqi.t && aqiData.iaqi.t.v} °C</p>
          <p>Umidade: {aqiData.iaqi.h && aqiData.iaqi.h.v}%</p>
          <p>Pressão Atmosférica: {aqiData.iaqi.p && aqiData.iaqi.p.v} hPa</p>
          <p>Velocidade do Vento: {aqiData.iaqi.w && aqiData.iaqi.w.v} m/s</p>
        </div>
      ) : (
        <p>Carregando dados de AQI...</p>
      )}
    </div>
  );
};

export default Poluicao;
