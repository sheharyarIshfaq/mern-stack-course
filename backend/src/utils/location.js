const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = process.env.MAPBOX_API_KEY;

const getCoordsForAddress = async (address) => {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${API_KEY}&limit=1`;

  const response = await axios.get(url);

  const data = response.data;

  if (!data || data.features.length === 0) {
    const error = new HttpError(
      "Could not find location. Try saomething else",
      422
    );
    throw error;
  }

  const coordinates = {
    lat: data.features[0].center[1],
    lng: data.features[0].center[0],
  };

  return coordinates;
};

module.exports = getCoordsForAddress;
