import React, { FC } from 'react';
import { router } from './utils/routes';
import { RouterProvider } from "react-router-dom";

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

export const App: FC = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}/>
    </PersistGate>
  );
};
