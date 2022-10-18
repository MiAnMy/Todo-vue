const getData = key => JSON.parse(localStorage.getItem(key));

const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { getData, setData };
