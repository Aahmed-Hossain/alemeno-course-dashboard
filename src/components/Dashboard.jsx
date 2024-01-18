import { useEffect, useState } from "react";

const Dashboard = () => {
    const [students, SetStudents] = useState([]);
  useEffect(()=>{
    const fetchData = async()=> {
      try {
        const response = await fetch(`https://course-dashboard-server.vercel.app/students`)
        const data = await response.json();
        SetStudents(data)
      } catch (error) {
        console.error("error from catch block", error)
      }
    }
    fetchData();
  },[]);
  return (
    <div className="w-11/12 mx-auto mt-6">
         <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block '>Image</th>
            <th>Course Name</th>
            <th>Student</th>
            <th className='hidden md:block '>Instructor</th>
            <th>Enroll Date</th>
          </tr>
        </thead>
        <tbody>
            {
                students.map((student, index)=>(
                    <tr key={index} className='text-sm lg:font-medium  odd:bg-red-50'>
           <img className="w-36 h-28  hidden md:block p-1" src={student.thumbnail} alt="" />
            <td className='py-4 px-1'>{student.name} </td>
    
            <td className='py-4 px-1'>Name: {student.studentName} <br />Email: {student.email}</td>
            <td className='hidden md:block py-4 px-1 '>{student.instructor}</td>
            <td className='py-4 px-1'>{student.date.slice(0, 10)}</td>
          </tr>
                ))
            }
        </tbody>
        </table>
    </div>
  )
}

export default Dashboard