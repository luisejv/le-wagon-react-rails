import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './store/StoreProvider';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
