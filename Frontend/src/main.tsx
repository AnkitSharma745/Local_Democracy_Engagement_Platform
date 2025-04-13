import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/rootStore';
import ThemeCustomization from './theme';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
} else {
  createRoot(rootElement).render(
    <Provider store={store}>
      <ThemeCustomization>
        <App />
      </ThemeCustomization>
    </Provider>
  );
}
