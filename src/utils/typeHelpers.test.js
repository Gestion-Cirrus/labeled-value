import {
  isDataUri,
  isImageUri,
  isVideoUri,
  isAudioUri,
  isTextUri,
  isNullish,
  isString,
  isNumber,
  isBoolean,
  isDate,
  isEmail,
  isJson,
  isGeoJson,
  isImage,
  isVideo,
  isAudio,
  isColor,
  determineValueType,
  isUrl,
  isDateString,
  isTextFile,
  isImageFile,
  isVideoFile,
  isAudioFile
} from './typeHelpers';



describe('typeHelpers', () => {
  describe('isNullish', () => {
    it('should return true for null, undefined, empty string, and NaN', () => {
      expect(isNullish(null)).toBe(true);
      expect(isNullish(undefined)).toBe(true);
      expect(isNullish('')).toBe(true);
      expect(isNullish(NaN)).toBe(true);
    });
    it('should return true for string representations of nullish values', () => {
      expect(isNullish('null')).toBe(true);
      expect(isNullish('nan')).toBe(true);
      expect(isNullish('undefined')).toBe(true);
      expect(isNullish('infinity')).toBe(true);
      expect(isNullish('-infinity')).toBe(true);
    });
    it('should return false for non-nullish values', () => {
      expect(isNullish('text')).toBe(false);
      expect(isNullish(0)).toBe(false);
      expect(isNullish({})).toBe(false);
      expect(isNullish([])).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('text')).toBe(true);
      expect(isString(new String('text'))).toBe(true);
    });
    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });

  // Additional tests for isNumber, isBoolean, isDate, isEmail, isJson, isGeoJson, isImage, isVideo, isAudio, isColor, and determineValueType would follow a similar pattern
});
  describe('isNumber', () => {
    it('should return true for finite numbers', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-123)).toBe(true);
      expect(isNumber(1.23)).toBe(true);
    });
    it('should return false for non-numbers and non-finite numbers', () => {
      expect(isNumber(NaN)).toBe(false);
      expect(isNumber(Infinity)).toBe(false);
      expect(isNumber(-Infinity)).toBe(false);
      expect(isNumber('123')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for boolean values', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(new Boolean(true))).toBe(true);
    });
    it('should return false for non-boolean values', () => {
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean([])).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should return true for Date objects and valid date strings', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate('2023-01-01')).toBe(true);
      expect(isDate('January 1, 2023')).toBe(true);
    });
    it('should return false for invalid date strings and non-date values', () => {
      expect(isDate('not a date')).toBe(false);
      expect(isDate(123)).toBe(false);
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate({})).toBe(false);
      expect(isDate([])).toBe(false);
    });
  });

  describe('isEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name+tag+sorting@example.com')).toBe(true);
    });
    it('should return false for invalid email addresses', () => {
      expect(isEmail('test@example')).toBe(false);
      expect(isEmail('test@.com')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test example.com')).toBe(false);
      expect(isEmail('test@example..com')).toBe(false);
      expect(isEmail('')).toBe(false);
      expect(isEmail(null)).toBe(false);
      expect(isEmail(undefined)).toBe(false);
      expect(isEmail(123)).toBe(false);
      expect(isEmail({})).toBe(false);
      expect(isEmail([])).toBe(false);
    });
  });

  describe('isJson', () => {
    it('should return true for valid JSON strings', () => {
      expect(isJson('{"key":"value"}')).toBe(true);
      expect(isJson('{"key":123,"isTrue":false}')).toBe(true);
      expect(isJson('[]')).toBe(true);
      expect(isJson('[1,2,3]')).toBe(true);
    });
    it('should return false for invalid JSON strings', () => {
      expect(isJson('{"key":value}')).toBe(false);
      expect(isJson('{key:"value"}')).toBe(false);
      expect(isJson('not json')).toBe(false);
      expect(isJson('')).toBe(false);
      expect(isJson(null)).toBe(false);
      expect(isJson(undefined)).toBe(false);
      expect(isJson(123)).toBe(false);
      expect(isJson({})).toBe(false); // Empty object is not a JSON string
      expect(isJson([])).toBe(false); // Empty array is not a JSON string
    });
  });

  describe('isGeoJson', () => {
    it('should return true for valid GeoJSON objects and strings', () => {
      const validGeoJsonString = '{"type":"FeatureCollection","features":[]}';
      const validGeoJsonObject = {
        type: 'FeatureCollection',
        features: []
      };
      expect(isGeoJson(validGeoJsonString)).toBe(true);
      expect(isGeoJson(validGeoJsonObject)).toBe(true);
    });
    it('should return false for invalid GeoJSON objects and strings', () => {
      const invalidGeoJsonString = '{"type":"FeatureCollection","features":notAnArray}';
      const invalidGeoJsonObject = {
        type: 'FeatureCollection',
        features: 'notAnArray'
      };
      expect(isGeoJson(invalidGeoJsonString)).toBe(false);
      expect(isGeoJson(invalidGeoJsonObject)).toBe(false);
      expect(isGeoJson('not geojson')).toBe(false);
      expect(isGeoJson(null)).toBe(false);
      expect(isGeoJson(undefined)).toBe(false);
      expect(isGeoJson(123)).toBe(false);
      expect(isGeoJson({})).toBe(false);
      expect(isGeoJson([])).toBe(false);
    });
  });

  describe('isImage', () => {
    it('should return true for HTMLImageElement instances and image URLs', () => {
      const imageElement = new Image();
      expect(isImage(imageElement)).toBe(true);
      expect(isImage('image.jpg')).toBe(true);
      expect(isImage('image.png')).toBe(true);
      expect(isImage('image.svg')).toBe(true);
    });
    it('should return false for non-image values', () => {
      expect(isImage('not-an-image.txt')).toBe(false);
      expect(isImage(null)).toBe(false);
      expect(isImage(undefined)).toBe(false);
      expect(isImage(123)).toBe(false);
      expect(isImage({})).toBe(false);
      expect(isImage([])).toBe(false);
    });
  });

  describe('isVideo', () => {
    it('should return true for HTMLVideoElement instances and video URLs', () => {
      const videoElement = document.createElement('video');
      expect(isVideo(videoElement)).toBe(true);
      expect(isVideo('video.mp4')).toBe(true);
      expect(isVideo('movie.webm')).toBe(true);
      expect(isVideo('clip.ogg')).toBe(true);
    });
    it('should return false for non-video values', () => {
      expect(isVideo('not-a-video.txt')).toBe(false);
      expect(isVideo(null)).toBe(false);
      expect(isVideo(undefined)).toBe(false);
      expect(isVideo(123)).toBe(false);
      expect(isVideo({})).toBe(false);
      expect(isVideo([])).toBe(false);
    });
  });

  describe('isAudio', () => {
    it('should return true for HTMLAudioElement instances and audio URLs', () => {
      const audioElement = new Audio();
      expect(isAudio(audioElement)).toBe(true);
      expect(isAudio('sound.mp3')).toBe(true);
      expect(isAudio('audio.wav')).toBe(true);
      expect(isAudio('music.ogg')).toBe(true);
    });
    it('should return false for non-audio values', () => {
      expect(isAudio('not-an-audio.txt')).toBe(false);
      expect(isAudio(null)).toBe(false);
      expect(isAudio(undefined)).toBe(false);
      expect(isAudio(123)).toBe(false);
      expect(isAudio({})).toBe(false);
      expect(isAudio([])).toBe(false);
    });
  });

  describe('isColor', () => {
    it('should return true for valid color strings', () => {
      expect(isColor('#fff')).toBe(true);
      expect(isColor('#ffffff')).toBe(true);
      expect(isColor('rgb(255,255,255)')).toBe(true);
      expect(isColor('rgba(255,255,255,1)')).toBe(true);
    });
    it('should return false for invalid color strings and non-color values', () => {
      expect(isColor('#ggg')).toBe(false);
      expect(isColor('rgb(256,256,256)')).toBe(false);
      expect(isColor('rgba(255,255,255,2)')).toBe(false);
      expect(isColor('not a color')).toBe(false);
      expect(isColor(null)).toBe(false);
      expect(isColor(undefined)).toBe(false);
      expect(isColor(123)).toBe(false);
      expect(isColor({})).toBe(false);
      expect(isColor([])).toBe(false);
    });
  });

  describe('determineValueType', () => {
    it('should return the correct type for various values', () => {
      expect(determineValueType('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe('Image');
      expect(determineValueType('data:video/mp4;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe('Video');
      expect(determineValueType('data:audio/wav;base64,UklGRiAAAA')).toBe('Audio');
      expect(determineValueType('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe('TextFile');
      // Test for a generic data URI that is not one of the above types
      expect(determineValueType('data:application/octet-stream;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe('Link');
        expect(determineValueType(null)).toBe('Void');
        expect(determineValueType(undefined)).toBe('Void');
        expect(determineValueType('')).toBe('Void');
        expect(determineValueType(NaN)).toBe('Void');
        expect(determineValueType(true)).toBe('Boolean');
        expect(determineValueType(false)).toBe('Boolean');
        expect(determineValueType(123)).toBe('Number');
        expect(determineValueType('2023-01-01')).toBe('Date');
        expect(determineValueType(new Date())).toBe('Date');
        expect(determineValueType('test@example.com')).toBe('Email');
        expect(determineValueType('{"key":"value"}')).toBe('Json');
        expect(determineValueType('{"type":"FeatureCollection","features":[]}')).toBe('GeoJson');
        expect(determineValueType('image.jpg')).toBe('Image');
        expect(determineValueType('video.mp4')).toBe('Video');
        expect(determineValueType('sound.mp3')).toBe('Audio');
        expect(determineValueType('#fff')).toBe('Color');
        expect(determineValueType('text')).toBe('String');
        expect(determineValueType({})).toBe('Void'); // Empty object
        expect(determineValueType([])).toBe('Void'); // Empty array
      });
      it('should return Void for unrecognized types', () => {
        expect(determineValueType(() => {})).toBe('Void');
        expect(determineValueType(Symbol('symbol'))).toBe('Void');
      });
    });
  describe('isDataUri', () => {
    it('should return true for valid data URIs', () => {
      expect(isDataUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(true); // 'Hello, World!' in base64
      expect(isDataUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true); // Partial data URI for a PNG image
    });
    it('should return false for invalid base64 encoded strings', () => {
      expect(isDataUri('invalid')).toBe(false);
      // expect(isDataUri('data:text/plain;base64,invalid')).toBe(false);
      expect(isDataUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).toBe(true);
      expect(isDataUri('')).toBe(false);
      expect(isDataUri(null)).toBe(false);
      expect(isDataUri(undefined)).toBe(false);
    });
  });

  describe('isUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('https://example.com')).toBe(true);
      expect(isUrl('ftp://example.com')).toBe(true);
    });
    it('should return false for invalid URLs', () => {
      expect(isUrl('not a url')).toBe(false);
      expect(isUrl('example.com')).toBe(false);
      expect(isUrl('')).toBe(false);
      expect(isUrl(null)).toBe(false);
      expect(isUrl(undefined)).toBe(false);
    });
  });

  describe('isDateString', () => {
    it('should return true for valid date strings', () => {
      expect(isDateString('2023-01-01')).toBe(true);
      expect(isDateString('January 1, 2023')).toBe(true);
    });
    it('should return false for invalid date strings', () => {
      expect(isDateString('not a date')).toBe(false);
      expect(isDateString('')).toBe(false);
      expect(isDateString(null)).toBe(false);
      expect(isDateString(undefined)).toBe(false);
    });
  });

  describe('isTextFile', () => {
    it('should return true for valid text file paths', () => {
      expect(isTextFile('document.txt')).toBe(true);
      expect(isTextFile('data.csv')).toBe(true);
    });
    it('should return false for invalid text file paths', () => {
      expect(isTextFile('image.jpg')).toBe(false);
      expect(isTextFile('')).toBe(false);
      expect(isTextFile(null)).toBe(false);
      expect(isTextFile(undefined)).toBe(false);
    });
  });

  describe('isImageFile', () => {
    it('should return true for valid image file paths', () => {
      expect(isImageFile('photo.jpg')).toBe(true);
      expect(isImageFile('graphic.png')).toBe(true);
    });
    it('should return false for invalid image file paths', () => {
      expect(isImageFile('document.txt')).toBe(false);
      expect(isImageFile('')).toBe(false);
      expect(isImageFile(null)).toBe(false);
      expect(isImageFile(undefined)).toBe(false);
    });
  });

  describe('isVideoFile', () => {
    it('should return true for valid video file paths', () => {
      expect(isVideoFile('movie.mp4')).toBe(true);
      expect(isVideoFile('clip.webm')).toBe(true);
    });
    it('should return false for invalid video file paths', () => {
      expect(isVideoFile('audio.mp3')).toBe(false);
      expect(isVideoFile('')).toBe(false);
      expect(isVideoFile(null)).toBe(false);
      expect(isVideoFile(undefined)).toBe(false);
    });
  });

  describe('isAudioFile', () => {
    it('should return true for valid audio file paths', () => {
      expect(isAudioFile('sound.mp3')).toBe(true);
      expect(isAudioFile('music.wav')).toBe(true);
    });
    it('should return false for invalid audio file paths', () => {
      expect(isAudioFile('video.mp4')).toBe(false);
      expect(isAudioFile('')).toBe(false);
      expect(isAudioFile(null)).toBe(false);
      expect(isAudioFile(undefined)).toBe(false);
    });
  });
  describe('isImageUri', () => {
    it('should return true for valid image data URIs', () => {
      expect(isImageUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-image data URIs', () => {
      expect(isImageUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isVideoUri', () => {
    it('should return true for valid video data URIs', () => {
      expect(isVideoUri('data:video/mp4;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-video data URIs', () => {
      expect(isVideoUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isAudioUri', () => {
    it('should return true for valid audio data URIs', () => {
      expect(isAudioUri('data:audio/wav;base64,UklGRiAAAA')).toBe(true);
    });
    it('should return false for non-audio data URIs', () => {
      expect(isAudioUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isTextUri', () => {
    it('should return true for valid text data URIs', () => {
      expect(isTextUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(true);
    });
    it('should return false for non-text data URIs', () => {
      expect(isTextUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(false);
    });
  });

  describe('isImageUri', () => {
    it('should return true for valid image data URIs', () => {
      expect(isImageUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-image data URIs', () => {
      expect(isImageUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isVideoUri', () => {
    it('should return true for valid video data URIs', () => {
      expect(isVideoUri('data:video/mp4;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-video data URIs', () => {
      expect(isVideoUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isAudioUri', () => {
    it('should return true for valid audio data URIs', () => {
      expect(isAudioUri('data:audio/wav;base64,UklGRiAAAA')).toBe(true);
    });
    it('should return false for non-audio data URIs', () => {
      expect(isAudioUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isTextUri', () => {
    it('should return true for valid text data URIs', () => {
      expect(isTextUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(true);
    });
    it('should return false for non-text data URIs', () => {
      expect(isTextUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(false);
    });
  });

  describe('isImageUri', () => {
    it('should return true for valid image data URIs', () => {
      expect(isImageUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-image data URIs', () => {
      expect(isImageUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isVideoUri', () => {
    it('should return true for valid video data URIs', () => {
      expect(isVideoUri('data:video/mp4;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    });
    it('should return false for non-video data URIs', () => {
      expect(isVideoUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isAudioUri', () => {
    it('should return true for valid audio data URIs', () => {
      expect(isAudioUri('data:audio/wav;base64,UklGRiAAAA')).toBe(true);
    });
    it('should return false for non-audio data URIs', () => {
      expect(isAudioUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(false);
    });
  });

  describe('isTextUri', () => {
    it('should return true for valid text data URIs', () => {
      expect(isTextUri('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBe(true);
    });
    it('should return false for non-text data URIs', () => {
      expect(isTextUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(false);
    });
  });

