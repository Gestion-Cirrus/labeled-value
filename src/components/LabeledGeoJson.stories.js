import React from 'react';
import LabeledGeoJson from './LabeledGeoJson';

const sampleGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [125.6, 10.1],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
  ],
};

const samplePolyGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [125.6, 10.1],
            [125.7, 10.1],
            [125.7, 10.2],
            [125.6, 10.2],
            [125.6, 10.1],
          ],
        ],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
  ],
};

const sampleLinesGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [125.6, 10.1],
          [125.7, 10.1],
          [125.7, 10.2],
          [125.6, 10.2],
          [125.6, 10.1],
        ],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
  ],
};

const sampleCollectionGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [125.6, 10.1],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [125.6, 10.1],
            [125.7, 10.1],
            [125.7, 10.2],
            [125.6, 10.2],
            [125.6, 10.1],
          ],
        ],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [125.6, 10.1],
          [125.7, 10.1],
          [125.7, 10.2],
          [125.6, 10.2],
          [125.6, 10.1],
        ],
      },
      properties: {
        name: 'Dinagat Islands',
      },
    },
  ],
};


export default {
  title: 'Basic/Geo/LabeledGeoJson',
  component: LabeledGeoJson,
};

export const Default = () => (
  <LabeledGeoJson label="GeoJSON" value={sampleGeoJson} />
);

export const Polygon = () => (
  <LabeledGeoJson label="GeoJSON" value={samplePolyGeoJson} />
);

export const Lines = () => (
  <LabeledGeoJson label="GeoJSON" value={sampleLinesGeoJson} />
);

export const Collection = () => (
  <LabeledGeoJson label="GeoJSON" value={sampleCollectionGeoJson} />
);


export const InvalidType = () => (
  <LabeledGeoJson label="GeoJSON" value="Not a GeoJSON" />
);

