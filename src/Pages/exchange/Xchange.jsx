/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Menu from '../../Components/Menu/Menu';
import XchangeCss from './xchange.module.css';

function xchange() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={XchangeCss.xchange__main}>
      <div className={XchangeCss.xchange__sec1}>
        <Menu />
      </div>
      <div className={XchangeCss.xchange__head}>
        <h1 className={XchangeCss.xchange__h1}>
          INNOVA
          <span>
            <img
              src="https://logodix.com/logo/1075173.png"
              alt="imagelogo"
              className={XchangeCss.xchange__logo}
            />
            CHANGE
          </span>
        </h1>
      </div>
      <div className={XchangeCss.xchange__sec2}>
        <div className={XchangeCss.xchange__deposit}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={XchangeCss.deposit__btn}
          >
            Deposit +
          </button>
        </div>
        {isOpen && (
          <div className={XchangeCss.deposit__main}>
            <div className={XchangeCss.deposit__input}>
              <input type="text" />
              <select name="currency" id="money">
                <option value="1">USD</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={XchangeCss.deposit__btn}
            >
              Deposit +
            </button>
          </div>
        )}
        <div className={XchangeCss.xchange__currencysec}>
          <div className={XchangeCss.xchange__walletb}>
            <h3>Main Balance</h3>
            <div className={XchangeCss.xchange__walletbm}>
              <div className={XchangeCss.wallet__first}>
                <h2>USD</h2>
                <h4>USD</h4>
                <p>Amount</p>
              </div>
              <div className={XchangeCss.wallet__second}>
                <button type="button">
                  <i className="fa fa-exchange" aria-hidden="true" />
                </button>
                <p>100</p>
              </div>
            </div>
          </div>
          <div className={XchangeCss.xchange__wallets}>
            <div className={XchangeCss.xchange__wallet}>
              <div className={XchangeCss.wallet__first}>
                <h2>USD</h2>
                <h4>USD</h4>
                <p>Amount</p>
              </div>
              <div className={XchangeCss.wallet__second}>
                <button type="button">
                  <i className="fa fa-exchange" aria-hidden="true" />
                </button>
                <p>100</p>
              </div>
            </div>
            <div className={XchangeCss.xchange__wallet}>
              <div className={XchangeCss.wallet__first}>
                <h2>EUR</h2>
                <h4>Euro</h4>
                <p>Amount</p>
              </div>
              <div className={XchangeCss.wallet__second}>
                <button type="button">
                  <i className="fa fa-exchange" aria-hidden="true" />
                </button>
                <p>500</p>
              </div>
            </div>
            <div className={XchangeCss.xchange__wallet}>
              <div className={XchangeCss.wallet__first}>
                <h2>XAF</h2>
                <h4>C.A Franc</h4>
                <p>Amount</p>
              </div>
              <div className={XchangeCss.wallet__second}>
                <button type="button">
                  <i className="fa fa-exchange" aria-hidden="true" />
                </button>
                <p>10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default xchange;
