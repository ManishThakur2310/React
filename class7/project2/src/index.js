import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const myContext = createContext();
const username = "Grow"
root.render(
  <>
    <BrowserRouter>
    <myContext.Provider value={username} >
      <App />
      </myContext.Provider>
    </BrowserRouter>
  </>

);

