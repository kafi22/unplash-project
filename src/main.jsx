import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {GlobalProvider} from './Components/GlobalProvider.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </GlobalProvider>
)
