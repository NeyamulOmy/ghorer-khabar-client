
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/services3')
          },
          {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('http://localhost:5000/services')
          }
        ]
      }
    ]
  )
  return (
    <div className="App mx-10">

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
