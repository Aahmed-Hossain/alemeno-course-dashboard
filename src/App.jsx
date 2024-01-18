import { useState } from "react";
import { useEffect } from "react";
import logo from './assets/Logo1.png'
import CourseCard from "./components/CourseCard";
import { Link } from "react-router-dom";
function App() {
  const [courses, SetCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://course-dashboard-server.vercel.app/search-course/${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setSearchResults(data);
      setSearchTerm('')
      console.log('serch',searchResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-11/12 mx-auto">
       <div className="text-xl flex flex-col md:flex-row lg:flex-row justify-between items-center font-semibold h-32 md:h-16 lg:h-16 border-b">
        <img className="w-28 h-12" src={logo} alt="" />
        {/* serch option */}
        <div className="flex items-center border-2 border-red-500 rounded-xl p-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}  
            placeholder="Search Your Course"
            className="flex-1 p-2 border-none focus:outline-none"
          />
          <button
          onClick={handleSearch}
           className="ml-2 p-2 hover:bg-red-600 bg-red-500 text-white rounded-full focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M21 21l-5-5m0 0a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <Link className="text-red-500 hover:text-red-700" to={'/dashboard'}>Dashboard</Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  my-4">
        {
          searchResults?.length === 0 ? 
          courses?.map(course => (<CourseCard
          key={course._id}
          course={course}
          ></CourseCard>)) :
          searchResults?.map(course => (<CourseCard
            key={course._id}
            course={course}
            ></CourseCard>))
        }
       </div>
    </div>
  )
}

export default App;
