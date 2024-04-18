import React from 'react';
import { determineValueType } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';
import LabeledString from './LabeledString';
import LabeledNumber from './LabeledNumber';
import LabeledDate from './LabeledDate';
import LabeledBoolean from './LabeledBoolean';
import LabeledJson from './LabeledJson';
import LabeledGeoJson from './LabeledGeoJson';
import LabeledEmail from './LabeledEmail';
import LabeledImage from './LabeledImage';
import LabeledVideo from './LabeledVideo';
import LabeledAudio from './LabeledAudio';
import LabeledFile from './LabeledFile';
import LabeledColor from './LabeledColor';

const LabeledValue = ({ label, value }) => {
  const valueType = determineValueType(value);
  let ComponentToRender;

  switch (valueType) {
    case 'Void':
      ComponentToRender = LabeledVoid;
      break;
    case 'String':
      ComponentToRender = LabeledString;
      break;
    case 'Number':
      ComponentToRender = LabeledNumber;
      break;
    case 'Date':
      ComponentToRender = LabeledDate;
      break;
    case 'Boolean':
      ComponentToRender = LabeledBoolean;
      break;
    case 'Json':
      ComponentToRender = LabeledJson;
      break;
    case 'GeoJson':
      ComponentToRender = LabeledGeoJson;
      break;
    case 'Email':
      ComponentToRender = LabeledEmail;
      break;
    case 'Image':
      ComponentToRender = LabeledImage;
      break;
    case 'Video':
      ComponentToRender = LabeledVideo;
      break;
    case 'Audio':
      ComponentToRender = LabeledAudio;
      break;
    case 'File':
      ComponentToRender = LabeledFile;
      break;
    case 'Color':
      ComponentToRender = LabeledColor;
      break;
    case 'Void':
    default:
      ComponentToRender = LabeledVoid;
      break;
  }

  return <ComponentToRender label={label} value={value} />;
};

export default LabeledValue;
