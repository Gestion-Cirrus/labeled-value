
export const isNullish = (value) => {
  if (value === null || value === undefined || value === '' || Number.isNaN(value)) {
    return true;
  }
  if (typeof value === 'string') {
    const nullishStrings = ['null', 'undefined', 'nan', 'infinity', '-infinity'];
    return nullishStrings.includes(value.trim().toLowerCase());
  }
  return false;
};



export const isString = (value) => {
  return typeof value === 'string' || value instanceof String && !isNullish(value) && !isNumber(value)  ;
};

export const isNumber = (value) => {
  if( typeof value ==='number' ){
    return isFinite(value);
  }else if( typeof value === 'string'){
    return /^\d+$/.test(value) || /^\d+\.\d+$/.test(value) || /^\d+e\d+$/.test(value);
  }
  return false;
  // return typeof value === 'number' && isFinite(value) || /^\d+$/.test(value) || /^\d+\.\d+$/.test(value) || /^\d+e\d+$/.test(value);
};

export const isBoolean = (value) => {
  return value === true || value === false || toString.call(value).slice(8, -1) === 'Boolean';
};

export const isDate = (value) => {
  return value instanceof Date || (typeof value === 'string' && !isNaN(Date.parse(value)));
};

export const isEmail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

export const isJson = (value) => {
  if (typeof value !== 'string') return false;
  try {
    const result = JSON.parse(value);
    return result !== null && typeof result === 'object';
  } catch (e) {
    return false;
  }
};

export const isGeoJson = (value) => {
  if (typeof value !== 'string' && typeof value !== 'object') return false;
  try {
    const obj = (typeof value === 'string') ? JSON.parse(value) : value;
    if (!obj || typeof obj !== 'object' || obj === null) return false;
    return ['FeatureCollection', 'Feature', 'Geometry'].includes(obj.type) && Array.isArray(obj.features);
    return ['FeatureCollection', 'Feature', 'Geometry'].includes(obj.type);
  } catch (e) {
    return false;
  }
};

export const isImage = (value) => {
  return (
    value instanceof HTMLImageElement ||
    typeof value === 'string' && value.match(/\.(jpeg|jpg|gif|png|svg)$/) != null
  );
};

export const isVideo = (value) => {
  return (
    value instanceof HTMLVideoElement ||
    typeof value === 'string' && value.match(/\.(mp4|webm|ogg)$/) != null
  );
};

export const isAudio = (value) => {
  return (
    value instanceof HTMLAudioElement ||
    typeof value === 'string' && value.match(/\.(mp3|wav|ogg)$/) != null
  );
};
export const isColor = (value) => {
  if (typeof value !== 'string') return false;
  const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
  const rgbColorRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const rgbaColorRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(1|0|0?\.\d+)\)$/;
  const matchRgb = value.match(rgbColorRegex);
  const matchRgba = value.match(rgbaColorRegex);
  const isValidRgb = matchRgb && matchRgb.slice(1).every((num) => num >= 0 && num <= 255);
  const isValidRgba = matchRgba && matchRgba.slice(1, 4).every((num) => num >= 0 && num <= 255) && matchRgba[4] >= 0 && matchRgba[4] <= 1;
  return hexColorRegex.test(value) || isValidRgb || isValidRgba ? true : false;
};



export const isDataUri = (value) => {
  const dataUriRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-]+=[a-z0-9-]+)?)?(;base64)?,[A-Za-z0-9+/]+={0,2}(?=(\s*|$))/i;
  return isString(value) && dataUriRegex.test(value);
};

export const isUrl = (value) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return isString(value) && urlRegex.test(value);
};

export const isDateString = (value) => {
  return isString(value) && !isNaN(Date.parse(value));
};

export const isTextFile = (value) => {
  return isString(value) && value.match(/\.(txt|csv|log|json|xml|xlsx|docx|pdf)$/) != null;
};

export const isImageFile = (value) => {
  return isString(value) && value.match(/\.(jpeg|jpg|gif|png|svg)$/)!= null;
};
export const isVideoFile = (value) => {
  return isString(value) && value.match(/\.(mp4|webm|ogg)$/)!= null;
}
export const isAudioFile = (value) => {
  return isString(value) && value.match(/\.(mp3|wav|ogg)$/)!= null;
}
export const isImageUri = (value) => {
  return isString(value) && value.match(/^data:image\/(jpeg|jpg|gif|png|svg);base64,/) != null;
};
export const isVideoUri = (value) => {
  return isString(value) && value.match(/^data:video\/(mp4|webm|ogg);base64,/) != null;
}
export const isAudioUri = (value) => {
  return isString(value) && value.match(/^data:audio\/(mp3|wav|ogg);base64,/) != null;
}
export const isTextUri = (value) => {
  return isString(value) && value.match(/^data:text\/(plain|csv|log|json|xml|xlsx|docx|pdf);base64,/) != null;
}

// Helper function to determine the type of value for LabeledValue component rendering
export const determineValueType = (value) => {
  if (isNullish(value)) return 'Void';
  if (isBoolean(value)) return 'Boolean';
  if (isNumber(value)) return 'Number';
  if (isDate(value)) return 'Date';
  if (isEmail(value)) return 'Email';
  if (isGeoJson(value)) return 'GeoJson';
  if (isJson(value)) return 'Json';
  if (isString(value)) {
    if (isUrl(value)) {
      if (isImageFile(value)) return 'Image';
      if (isVideoFile(value)) return 'Video';
      if (isAudioFile(value)) return 'Audio';
      if (isTextFile(value)) return 'TextFile';
      return 'Link';
    }
    if (isDataUri(value)){
      if (isImageUri(value)) return 'Image';
      if (isVideoUri(value)) return 'Video';
      if (isAudioUri(value)) return 'Audio';
      if (isTextUri(value)) return 'TextFile';
      return 'Link';
    }
    if (isDateString(value)) return 'Date';
    if (isColor(value)) return 'Color';
    if (isEmail(value)) return 'Email';
    if (isImageFile(value)) return 'Image';
    if (isVideoFile(value)) return 'Video';
    if (isAudioFile(value)) return 'Audio';
    if (isTextFile(value)) return 'TextFile';
    return 'String'; // Default to 'String' for any other string value
  }
  if (typeof value === 'symbol') return 'Void';
  return 'Void'; // Default to 'Void' for any other unrecognized type
};

