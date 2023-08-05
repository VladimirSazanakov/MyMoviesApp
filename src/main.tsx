import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import App2 from './components/App2';

import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import useToken from 'antd/es/theme/useToken';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={
      {
        token: {
          colorPrimary: "#212121",
        }
      }
    } />
    <App2 />
  </React.StrictMode>,
)
