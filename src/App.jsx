import { useState } from "react";
import { useEffect } from "react";
import logo from './assets/Logo1.png'
import CourseCard from "./components/CourseCard";
function App() {
  const [courses, SetCourses] = useState([]);
  useEffect(()=>{
    const fetchData = async()=> {
      try {
        const response = await fetch(`https://course-dashboard-server.vercel.app/courses`)
        const data = await response.json();
        SetCourses(data)
      } catch (error) {
        console.error("error from catch block", error)
      }
    }
    fetchData();
  },[]);

  return (
    <div className="w-11/12 mx-auto">
       <div className="text-xl flex justify-between items-center font-semibold h-16 border-b">
        <img className="w-24" src={logo} alt="" />
        <p>Search</p>
        <p className="">something</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  my-4">
        {
          courses.map(course => (<CourseCard
          key={course._id}
          course={course}
          ></CourseCard>))
        }
       </div>
    </div>
  )
}

export default App;
// https://course-dashboard-server.vercel.app/courses
