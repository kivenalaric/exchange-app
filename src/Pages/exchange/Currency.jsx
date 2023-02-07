import React from 'react';
import XchangeCss from './xchange.module.css';

function Currency() {
  return (
    <div className={XchangeCss.xchange__section}>
      <div>
        <input type="number" />
        <select name="select" id="select">
          <option value="">USD</option>
          <option value="">XAF</option>
          <option value="">EUR</option>
        </select>
      </div>
    </div>
  );
}

export default Currency;
