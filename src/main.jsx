import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import CourseDetails from './components/CourseDetails';
import EnrollNow from './components/EnrollNow';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/Dashboard';
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
{
  path: '/enrollNow/:id',
  element: <EnrollNow></EnrollNow>,
  loader: ({params})=> fetch(`https://course-dashboard-server.vercel.app/courses/${params.id}`)
},
{
  path: '/dashboard',
  element: <Dashboard></Dashboard>
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    closeOnClick={true}
    pauseOnHover={true}
    draggable={true}
    progress={undefined}
    theme="light"
  />
  <RouterProvider router={router} />
</React.StrictMode>

)
