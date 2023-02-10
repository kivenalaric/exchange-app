/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyContext from './context/context';
import Landing from './Pages/Landing/Landing';
import Xchange from './Pages/exchange/Xchange';
// import getSymbols from './api';
// const BASE_URL =
//   'https://api.apilayer.com/fixer/latest?symbols={symbols}&base={base}';

const options = { method: 'GET', headers: { accept: 'application/json' } };
const ApiKey = 'b0bce07b6d-2702c6e805-rpth9i';
function App() {
  const [defaultCurrency, setDefaultCurrrency] = useState('USD');
  console.log(defaultCurrency);
  // const [options, setOptions] = useState([]);
  // useEffect(() => {
  //   console.log(getSymbols);
  // const [currency, setCurrency] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);
  // }, []);
  useEffect(() => {
    fetch(
      `https://api.fastforex.io/fetch-all?from=USD&api_key=${ApiKey}`,
      options
    )
      .then((response) => response.json())
      .then((res) =>
        setCurrencyOptions([res.base, ...Object.keys(res.results)])
      )
      .catch((err) => console.error('error ocured', err));
  }, []);
  return (
    <MyContext.Provider
      value={{
        defaultCurrency,
        setDefaultCurrrency,
        currencyOptions,
        setCurrencyOptions,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="exchange" element={<Xchange />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
