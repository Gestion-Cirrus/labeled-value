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

export default {
  title: 'LabeledGeoJson',
  component: LabeledGeoJson,
};

export const Default = () => (
  <LabeledGeoJson label="GeoJSON" value={sampleGeoJson} />
);

export const InvalidType = () => (
  <LabeledGeoJson label="GeoJSON" value="Not a GeoJSON" />
);
