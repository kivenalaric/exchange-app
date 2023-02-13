/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect, useState } from 'react';
import Menu from '../../Components/Menu/Menu';
import MyContext from '../../context/context';
import XchangeCss from './xchange.module.css';

function xchange() {
  const [isOpen, setIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [popUp, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup((prev) => !prev);
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  const [wallet, setWallet] = useState([]);
  const closePopUp = () => {
    setIsOpen(false);
  };
  const { defaultCurrency, setDefaultCurrrency, currencyOptions } =
    useContext(MyContext);

  const convertCurrency = () => {};

  const handleAdd = (event) => {
    event.preventDefault();
    if (event.target.elements.amount.value <= 0) {
      alert('please input a reasonable amount');
    } else {
      setWallet((prev) => [
        ...prev,
        {
          amount: event.target.elements.amount.value,
          currency: event.target.elements.money.value,
        },
      ]);
    }
    setTotalAmount((prev) => prev + +event.target.elements.amount.value);
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
                handleAdd(e);
                closePopUp(e);
              }}
            >
              <div className={XchangeCss.deposit__input}>
                <input
                  type="number"
                  id="amount"
                  placeholder="Make Deposit here"
                />
                <select name="currency" id="money">
                  {currencyOptions.map((option) => (
                    <option value={option} id="option" key={option}>
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
                <h1>Total</h1>
                <p>{totalAmount}</p>
              </div>
            </div>
          </div>
          <div className={XchangeCss.xchange__wallets}>
            {popUp && (
              <div className={XchangeCss.popup__overlay}>
                <form
                  action="submit"
                  className={XchangeCss.transfer__form}
                  onSubmit={() => {
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
                  <button type="submit" className={XchangeCss.transer__btn}>
                    Transfer
                  </button>
                </form>
              </div>
            )}
            {wallet.map((data) => {
              return (
                <div className={XchangeCss.xchange__wallet}>
                  <div className={XchangeCss.wallet__first}>
                    <h2>{data.currency}</h2>
                    <p>Amount</p>
                  </div>
                  <div className={XchangeCss.wallet__second}>
                    <button type="button" onClick={togglePopup}>
                      <i className="fa fa-exchange" aria-hidden="true" />
                    </button>
                    <p>{data.amount}</p>
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
