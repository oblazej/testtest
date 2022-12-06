import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';

// import i18n (needs to be bundled ;)) 
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);