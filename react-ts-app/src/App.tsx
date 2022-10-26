import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

const onClickUsers = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res: AxiosResponse<any>) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};
const onClickUser1 = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((res: AxiosResponse<any>) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

function App() {
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}

export default App;
