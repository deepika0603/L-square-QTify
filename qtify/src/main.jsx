import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import HomePage from "./pages/HomePage/HomePage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";


const route = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <HomePage /> 
  },
    {
      path: "/album/:albumid",
      element: <AlbumPage />
    }
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)