/* eslint-disable react/no-array-index-key */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import Menu from '../../Components/Menu/Menu';
import MyContext from '../../context/context';
import XchangeCss from './xchange.module.css';

function xchange() {
  const {
    defaultCurrency,
    setDefaultCurrrency,
    currencyOptions,
    exchangeRates,
    setExchangeRates,
  } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [previousSign, setpreviousSign] = useState('AED');
  const [popUp, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup((prev) => !prev);
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const [wallet, setWallet] = useState([
    // {
    //   amount: 0,
    //   currency: 'USD',
    // },
    // {
    //   amount: 0,
    //   currency: 'XAF',
    // },
    // {
    //   amount: 0,
    //   currency: 'EUR',
    // },
  ]);

  const closePopUp = () => {
    setIsOpen(false);
  };

  console.log(exchangeRates);

  const handleAdd = (AMT, curr) => {
    if (AMT <= 0) {
      alert('please input a reasonable amount');
    } else {
      setWallet((prev) => [
        ...prev,
        {
          amount: AMT,
          currency: curr,
        },
      ]);
    }
    const RESULTS = (AMT / 1) * +exchangeRates[curr];
    console.clear();
    console.log('this RESULTS', AMT, exchangeRates, curr);
    setTotalAmount((prev) => prev + RESULTS);
  };

  const handleChangeDefault = (sign) => {
    const RESULTS =
      (totalAmount / exchangeRates[previousSign]) * +exchangeRates[sign];
    setTotalAmount(RESULTS);
    setpreviousSign(sign);
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
          <div className={XchangeCss.deposit__secondry}>
            <form
              className={XchangeCss.deposit__main}
              onSubmit={(e) => {
                e.preventDefault();
                handleAdd(
                  +e.target.elements.amount.value,
                  e.target.elements.money.value
                );
                closePopUp();
              }}
            >
              <div className={XchangeCss.deposit__input}>
                <input
                  type="number"
                  id="amount"
                  placeholder="Make Deposit here"
                />
                <select name="currency" id="money">
                  {currencyOptions.map((option, index) => (
                    <option value={option} id="option" key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className={XchangeCss.deposit__btn}>
                Deposit +
              </button>
            </form>
          </div>
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
                  onChange={(e) => {
                    handleChangeDefault(e.target.value);
                  }}
                >
                  {wallet.map((option, index) => (
                    <option
                      className={XchangeCss.select__option}
                      value={option.currency}
                      key={index}
                    >
                      {option.currency}
                    </option>
                  ))}
                </select>
                <p>Amount</p>
              </div>
              <div className={XchangeCss.wallet__second}>
                <h1>Total</h1>
                <p>{totalAmount}</p>
              </div>
            </div>
          </div>
          <div className={XchangeCss.xchange__wallets}>
            {popUp && (
              <div className={XchangeCss.popup__overlay}>
                <form
                  className={XchangeCss.transfer__form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    // console.log('this e', e);
                    togglePopup();
                  }}
                >
                  <h4>Tranfer</h4>
                  <input
                    type="number"
                    className={XchangeCss.transfer__input}
                    placeholder="Enter Amount"
                  />
                  <p>To</p>
                  <select
                    className={XchangeCss.select__default}
                    name="select"
                    id="select"
                  >
                    {currencyOptions.map((option, index) => (
                      <option
                        className={XchangeCss.select__option}
                        value="currency"
                        key={index}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className={XchangeCss.transer__btn}>
                    Transfer
                  </button>
                </form>
              </div>
            )}
            {wallet.map((data, index) => {
              return (
                <div className={XchangeCss.xchange__wallet}>
                  <div className={XchangeCss.wallet__first}>
                    <h2 key={index}>{data.currency}</h2>
                    <p>Amount</p>
                  </div>
                  <div className={XchangeCss.wallet__second}>
                    <button type="button" onClick={togglePopup}>
                      <i className="fa fa-exchange" aria-hidden="true" />
                    </button>
                    <p key={index}>{data.amount}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default xchange;
