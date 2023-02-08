import React from 'react';
import XchangeCss from './xchange.module.css';

function Currency() {
  return (
    <div className={XchangeCss.xchange__section}>
      <div className={XchangeCss.convert__sec}>
        <input type="number" className={XchangeCss.xchange__input} />
        <select
          className={XchangeCss.xchange__select}
          name="select"
          id="select"
        >
          <option value="">USD</option>
        </select>
      </div>
    </div>
  );
}

export default Currency;
