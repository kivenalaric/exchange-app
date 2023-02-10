const options = { method: 'GET', headers: { accept: 'application/json' } };

const getRates = (defaultCurrency) =>
  fetch(
    `https://api.fastforex.io/fetch-all?from=${defaultCurrency}&api_key=b0bce07b6d-2702c6e805-rpth9i`,
    options
  ).then((response) => response.json());

const convertCurrency = (from, to, amount) =>
  fetch(
    `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=b0bce07b6d-2702c6e805-rpth9i`,
    options
  ).then((response) => response.json());

export default { getRates, convertCurrency };
