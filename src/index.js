import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from "react-redux";
import {store } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigate to="/Inbox"/>} />
        <Route path='/Inbox' element={<App />} />
        <Route path='/Inbox/?search=:searchText' element={<App />} />
        <Route path='/Spam' element={<App />} />
        <Route path='/Spam/?search=:searchText' element={<App />} />
        <Route path='/Draft' element={<App />} />
        <Route path='/Draft/?search=:searchText' element={<App />} />
        <Route path='/Trash' element={<App />} />
        <Route path='/Trash/?search=:searchText' element={<App />} />
        <Route path='/All' element={<App />} />
        <Route path='/All/?search=:searchText' element={<App />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
