import './styles/index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './scripts/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './scripts/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
