
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Services from './components/Services';
import Details from './components/Details';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import AddReviews from './components/AddReviews';

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
          },
          {
            path: '/services/:id',
            element: <Details></Details>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signUp',
            element: <SignUp></SignUp>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '/addReview/:id',
            element: <AddReviews></AddReviews>
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
