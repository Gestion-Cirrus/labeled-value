import './LabeledTimeline.css'; // Assume this contains your styling
import React from 'react';

const calculateWidth = (start, end, totalDuration) => {
  const duration = new Date(end) - new Date(start);
  return (duration / totalDuration) * 100; // as a percentage of the total duration
};

const LabeledTimeline = ({ label, segments, totalDuration }) => {
  return (
    <div className="labeled-timeline">
      {label && <div className="labeled-timeline-label">{label}</div>}
      <div className="timeline-container">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`timeline-segment ${segment.type}`}
            style={{ width: `${calculateWidth(segment.start, segment.end, totalDuration)}%` }}
            title={`${segment.type.toUpperCase()}: ${segment.start} to ${segment.end}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LabeledTimeline;
