import React from 'react';
import { ProductPage } from '../pages/ProductPage';
import { Cart } from '../pages/Cart';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />
  },
  {
    path: "cart",
    element: <Cart />
  }
]);