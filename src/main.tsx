import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/index.css';
import './css/App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter basename="/cisc322">
        <App />
    </BrowserRouter>
);
