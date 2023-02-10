/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import Menu from '../../Components/Menu/Menu';
import MyContext from '../../context/context';
import XchangeCss from './xchange.module.css';

function xchange() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const [wallet, setWallet] = useState([]);
  const closePopUp = () => {
    setIsOpen(false);
  };
  // const [wallet, setWallet] = useState([
  //   { currency: 'USD', amount: 100 },
  //   { currency: 'EUR', amount: 500 },
  //   { currency: 'XAF', amount: 10000 },
  // ]);
  const { defaultCurrency, setDefaultCurrrency, currencyOptions } =
    useContext(MyContext);
  const handleAdd = (event) => {
    setWallet([setAmount(event.target.value)]);
    // setCurrency(currencyOptions);
  };
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
            onClick={() => {
              handleClickOpen();
            }}
            className={XchangeCss.deposit__btn}
          >
            Deposit +
          </button>
        </div>
        {isOpen ? (
          <form className={XchangeCss.deposit__main}>
            <div className={XchangeCss.deposit__secondry}>
              <div className={XchangeCss.deposit__input}>
                <input type="number" id="amount" />
                <select name="currency" id="money">
                  {currencyOptions.map((option) => (
                    <option value="option" key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleAdd();
                  closePopUp();
                }}
                className={XchangeCss.deposit__btn}
              >
                Deposit +
              </button>
            </div>
          </form>
        ) : (
          ''
        )}
        <div className={XchangeCss.xchange__currencysec}>
          <div className={XchangeCss.xchange__walletb}>
            <h3>Main Balance</h3>
            <div className={XchangeCss.xchange__walletbm}>
              <div className={XchangeCss.wallet__first}>
                <select
                  className={XchangeCss.select__default}
                  name="select"
                  id="select"
                >
                  {currencyOptions.map((option) => (
                    <option
                      className={XchangeCss.select__option}
                      value="currency"
                      key={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
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
            {wallet.map(() => {
              return (
                <div className={XchangeCss.xchange__wallet}>
                  <div className={XchangeCss.wallet__first}>
                    <h2>{currency}</h2>
                    <p>Amount</p>
                  </div>
                  <div className={XchangeCss.wallet__second}>
                    <button type="button">
                      <i className="fa fa-exchange" aria-hidden="true" />
                    </button>
                    <p>{amount}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className={XchangeCss.xchange__wallet}>
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
            </div> */}
            {/* <div className={XchangeCss.xchange__wallet}>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default xchange;
