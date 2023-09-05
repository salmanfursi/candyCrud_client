import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import AddChocolate from './AddChocolate';
import UpdateChoco from './UpdateChoco';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch("http://localhost:5000/chocolate")
  },
  {
    path: "/addchocolate",
    element: <AddChocolate></AddChocolate>
  },
  {
    path: "/update/:id",
    element: <UpdateChoco></UpdateChoco>,
    loader:({params})=>fetch(`http://localhost:5000/chocolate/${params.id}`)
    
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
