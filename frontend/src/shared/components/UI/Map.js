import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = (props) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2hlaGFyeWFyMyIsImEiOiJja3JweHVuOWIyaHk1MnFrZG5uOGc1bzB5In0.8AY-3rDb8I2NvKij58JDhQ";

  const { center, zoom } = props;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom]);

  return (
    <div
      id="mapContainer"
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
