import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import Routes from './Components/Routes/Routes.jsx';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
