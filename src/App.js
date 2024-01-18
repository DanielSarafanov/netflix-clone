import React from 'react';
import './App.css';
import Homescreen from './screens/Homescreen/Homescreen';
import LoginScreen from './screens/Login/Login'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const user= null;

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Homescreen /> : <LoginScreen />
    },
    // Add more routes here as needed
  ]);

  return (
    <div className="app">
        
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
