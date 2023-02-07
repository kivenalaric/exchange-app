import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Currency from './Currency';
import XchangeCss from './xchange.module.css';

function xchange() {
  const BASE_URL = 'X0SZjlxRhzsqQmIsBJ6yS7nVoSDTDhCo'
  return (
    <div className={XchangeCss.xchange__main}>
      <div className={XchangeCss.xchange__sec1}>
        <Menu />
      </div>
      <div className={XchangeCss.xchange__sec2}>
        <div className={XchangeCss.xchange__head}>
          <h1 className={XchangeCss.xchange__h1}>Xchange App</h1>
        </div>
        <div className={XchangeCss.xchange__currencysec}>
          <Currency />
          <p className={XchangeCss.xchange__p}>=</p>
          <Currency />
          <Currency />
        </div>
      </div>
    </div>
  );
}

export default xchange;
