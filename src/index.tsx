import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Grommet, ThemeType } from 'grommet';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme: ThemeType = {
  global: {
    font: {
      family: 'Poppins',
      size: '1em',
    },
  },
  heading: {
    font: {
      family: 'Lora',
    },
  },
  tip: {
    content: {
      background: 'accent-1',
      elevation: 'none',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet id="grommet" theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
