import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={[-0.1276, 51.5074]}>
        <circle r={6} fill="#FFFFFF" stroke="#fff" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={-20}
          style={{ fontFamily: "system-ui", fill: "#FFFFFF" }}
        >
          London
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default Map;
