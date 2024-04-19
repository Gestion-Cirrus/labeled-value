import './LabeledValue.css';
import './LabeledPercentage.css';
import LabeledVoid from './LabeledVoid';
import { isNumber, isNullish } from '../utils/typeHelpers';
import React from 'react';
const LabeledPercentage = ({ label, value }) => {
    if (!isNumber(value) || isNullish(value)) {
        return <LabeledVoid label={label} value={value} />;
    }
    
    return (
        <div className="labeled-value labeled-percentage">
        {label && <div className="labeled-value-label">{label}</div>}
        <div className="labeled-value-value">{Number(value).toFixed(2)}% <div className='percentage-pie' style={{"--p":value}}></div></div>
        </div>
    );
}

export default LabeledPercentage;