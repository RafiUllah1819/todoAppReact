import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './app/App';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   <ToastContainer 
 position="top-right"
 autoClose={3000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
      />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


