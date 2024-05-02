"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import features from "@/lib/components/features.json";

const MapChart = ({ state }) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1500,
      }}
    >
      <Geographies
        geography={features}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-100}
        dy={-30}
        connectorProps={{
          stroke: "green",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="green"
          fontSize={24}
        >
          {state}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
