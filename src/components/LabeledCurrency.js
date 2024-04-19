import './LabeledValue.css';

import React from 'react';

const LabeledCurrency = ({ label, value, currency = 'USD' }) => {
    let formatedValue = '';
    try{
        formatedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
    }catch(e){
        console.log('Error formatting currency', e);
        formatedValue = `\$${Number(value).toFixed(2)}`;
    }
    return (
      <div className="labeled-value labeled-currency">
        {label && <div className="labeled-value-label">{label}</div>}
        <div className="labeled-value-value">{formatedValue}</div>
      </div>
    );
  };

export default LabeledCurrency;