import React from 'react';

import { Provider } from './provider';
import { Screens } from './screens';
import axios from "axios";
import { API_BASE_URL } from "./constants";

axios.defaults.baseURL = API_BASE_URL;

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <Provider>
      <Screens />
    </Provider>
  );
};
