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

export const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  cache: new InMemoryCache(),
});

client.writeQuery({
  query: gql`
    query cartHidden {
      cartHidden
    }
  `,
  data: {
    cartHidden: true,
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
