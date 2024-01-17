import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import CourseDetails from './components/CourseDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/:id',
    element: <CourseDetails></CourseDetails>,
    loader: ({params})=> fetch(`https://course-dashboard-server.vercel.app/courses/${params.id}`)
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
