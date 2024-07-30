const axios = require("axios");
const fs = require("fs");

class Busquedas {
  // historial = ["Tegucigalpa", "Madrid", "San José", "Bogotá"];
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    //leer DB si existe
    this.leerDB();
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));
      return palabras.join(" ");
    });
  }

  // para usar parametros dentro de esta clase
  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      //"pk.eyJ1IjoiY29kaW5namFtZXMiLCJhIjoiY2x6NGVrMGh2MGF3ajJpcTVhempvMGpkaCJ9.5raqdo6O_56C8xQ9AC7FJw",
      limit: 5,
      language: "es",
    };
  }

  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }

  async ciudad(lugar = "") {
    // console.log("ciudad:", lugar);

    try {
      // petición http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });

      const { data } = await instance.get();
      return data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return []; //retornar los luagres que coincidan
    }
  }

  async climaLugar(lat, lon) {
    try {
      const instance = await axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon },
      });

      const { data } = await instance.get();
      const { weather, main } = data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async agregarHistorial(lugar = "") {
    // prevenir duplicados
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return;
    }

    this.historial.unshift(lugar.toLocaleLowerCase());

    //Grabar en DB
    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    if (!fs.existsSync(this.dbPath)) return;

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
    const data = JSON.parse(info);

    this.historial = data.historial;
  }
}

module.exports = Busquedas;
