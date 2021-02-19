import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client';
import store from './redux/store';
import { persistor } from './redux/store';
import './index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Product } from './Types';
import { register } from './serviceWorkerRegistration';

export const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  cache: new InMemoryCache(),
});

interface State {
  cartHidden: boolean;
  cartItems: Product[];
  cartItemsCount: number;
}

// State of the app
client.writeQuery<State>({
  query: gql`
    query cartHidden {
      cartHidden
      cartItems
      cartItemsCount
    }
  `,
  data: {
    cartHidden: true,
    cartItems: [],
    cartItemsCount: 0,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Registering service worker
register();
