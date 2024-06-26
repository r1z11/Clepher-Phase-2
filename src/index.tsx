import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';
import SignIn from './pages/auth/SignIn';
import Home from './pages/dashboard/Home';
import Dash from './pages/dashboard/Dash';
import ErrorPage from './pages/Error';
import Capture from './pages/dashboard/Capture';
import PostEngagements from './pages/dashboard/PostEngagements';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/dashboard/:botId",
    element: <Dash />,
  },
  {
    path: "/dashboard/capture/:botId",
    element: <Capture />,
  },
  {
    path: "/dashboard/engagements/:botId",
    element: <PostEngagements />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
