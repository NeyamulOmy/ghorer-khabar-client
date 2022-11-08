import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          }
        ]
      }
    ]
  )
  return (
    <div className="App">

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
