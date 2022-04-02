import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// React 17
// ReactDOM.render(<App />, document.getElementById('root'))

//Появилась возможность размонитровать, полезно было бы
//в микросервесной архитектуре, один микрофронтенд размноитровали,
//другой вмонтировали

// root.unmount()


//ServerSideRandering
//hydrate метод из 17 заменяется на hydrateRoot
reportWebVitals();
