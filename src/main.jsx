import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FoodApp } from './FoodApp.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
  
    <Provider store={store}>
      <BrowserRouter>
        <FoodApp />
      </BrowserRouter>
    </Provider>
  
    
    
    
   </React.StrictMode>
)
