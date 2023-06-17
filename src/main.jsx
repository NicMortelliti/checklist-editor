import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
