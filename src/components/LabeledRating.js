import './LabeledValue.css'
import './LabeledRating.css'
import React from 'react'
import { isNumber, isNullish } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid'

const LabeledRating = ({ label, value, max = 5 }) =>   {
    if( !isNumber(value) || isNullish(value)){
        return <LabeledVoid label={label} value={value} />
    }
    console.log(value)
    return (
        <div className="labeled-value labeled-rating">
            {label && <div className="labeled-value-label">{label}</div>}
            <div className="labeled-value-value">
                {[...Array(max)].map((_, i) => (
                    <span key={i} className={i < Number(value) ? 'star filled' : 'star empty'}>★</span>
                ))}
            </div>
        </div>
    )
}

export default LabeledRating
