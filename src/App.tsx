import React, { FC } from 'react';
import { router } from './utils/routes';
import { RouterProvider } from "react-router-dom";

export const App: FC = () => {
  return <RouterProvider router={router}/>
};
