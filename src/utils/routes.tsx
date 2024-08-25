import React from 'react';
import { ProductPage } from '../pages/ProductPage';
import { Cart } from '../pages/Cart';
import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../pages/Layout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductPage />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
]);