import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { GeoJSON } from 'ol/format';
import { Style, Fill, Stroke } from 'ol/style';
import { isGeoJson } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledGeoJson = ({ label, value }) => {
 
  if (!isGeoJson(value)) {
    return <LabeledVoid label={label} value={value} />;
  }
 
  const mapElement = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; // Initialize the map only once

    mapRef.current = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: new GeoJSON().readFeatures(value, {
              featureProjection: 'EPSG:3857',
            }),
          }),
          style: new Style({
            fill: new Fill({
              color: 'rgba(255, 255, 255, 0.6)',
            }),
            stroke: new Stroke({
              color: '#319FD3',
              width: 1,
            }),
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, [value]);


  return (
    <div className="labeled-value labeled-geojson">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">
        <div ref={mapElement} className="geojson-map" style={{ height: '400px' }}></div>
      </div>
    </div>
  );
};

export default LabeledGeoJson;
