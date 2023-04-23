import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux'
import './index.css';

// process.env: https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>      
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />  
        </BrowserRouter>
      </PersistGate>    
    </Provider>
  </React.StrictMode>
);
