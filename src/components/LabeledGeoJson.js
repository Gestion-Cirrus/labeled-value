import './LabeledGeoJson.css';
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { GeoJSON } from 'ol/format';
import './LabeledValue.css';
import './LabeledGeoJson.css';
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style';
import { isGeoJson } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';
const fileSafeName = (name) => name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
const LabeledGeoJson = ({ label, value }) => {
  if (!isGeoJson(value)) {
    return <LabeledVoid label={label} value={value} block="true"/>;
  }

  const mapElement = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const features = new GeoJSON().readFeatures(value, {
      dataProjection: 'EPSG:4326', // assuming the GeoJSON is in standard geographic coordinates
      featureProjection: 'EPSG:3857' // convert to web mercator projection used by most web maps
    });

    if (!mapRef.current) {
      mapRef.current = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({ features }),
            style: function(feature) {
              const geometryType = feature.getGeometry().getType();
              switch (geometryType) {
                case 'Point':
                case 'MultiPoint':
                  return new Style({
                    image: new CircleStyle({
                      radius: 5,
                      fill: new Fill({color: 'red'}),
                      stroke: new Stroke({color: 'black', width: 1})
                    })
                  });
                case 'LineString':
                case 'MultiLineString':
                  return new Style({
                    stroke: new Stroke({
                      color: '#00ff00', // green
                      width: 2
                    })
                  });
                case 'Polygon':
                case 'MultiPolygon':
                  return new Style({
                    fill: new Fill({
                      color: 'rgba(0, 0, 255, 0.1)' // semi-transparent blue
                    }),
                    stroke: new Stroke({
                      color: '#0000ff', // blue
                      width: 1
                    })
                  });
                default:
                  return new Style(); // default style
              }
            }
          }),
        ],
        view: new View({
          center: [0, 0], // will be updated
          zoom: 2,
        }),
      });
    } else {
      const vectorSource = mapRef.current.getLayers().getArray()[1].getSource();
      vectorSource.clear(true);
      vectorSource.addFeatures(features);
    }

    if (features.length > 0) {
      const vectorSource = mapRef.current.getLayers().getArray()[1].getSource();
      const extent = vectorSource.getExtent();
      mapRef.current.getView().fit(extent, { padding: [50, 50, 50, 50], duration: 222 });
    }
  }, [value]); // Depend on `value` to re-run this effect when `value` changes
  
  let figcaption;
  let filename = `${fileSafeName(label)}.geojson`;
  figcaption = (
    <figcaption>
      {filename}
      <a href={`data:application/json,${encodeURIComponent(value)}`} download={filename} target="_blank">◳</a>
    </figcaption>
  );
  return (
    <div className="labeled-value labeled-geojson">
      {label && <div className="labeled-value-label">{label}</div>}
      <figure className="labeled-value-value">
        <div ref={mapElement} className="geojson-map" style={{ height: '400px' }}></div>
        {figcaption}
      </figure>
    </div>
  );
};

export default LabeledGeoJson;

