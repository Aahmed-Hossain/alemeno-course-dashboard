import { toast } from 'react-toastify';
import { useLoaderData,useNavigate  } from "react-router-dom";
import axios from "axios";
 const EnrollNow = () => {
  const course = useLoaderData();
  const navigate = useNavigate();
  const {
    name,
    thumbnail, 
    instructor
  } = course || {};

const handleEnroll = e => {
  e.preventDefault();
  const form = e.target;
  const studentName = form.studentName.value;
  const email = form.email.value;
  const date = new Date();
  const enrolledCourse = {studentName, name, email,thumbnail,instructor,date }
  axios.post(`https://course-dashboard-server.vercel.app/enrolledStudent`, enrolledCourse, {
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Great!!  Enrolled successfully!");
        }
        form.reset();
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
}

  return (
    <div className="w-11/12 md:w-9/12 lg:w-8/12  my-8 bg-white shadow-md hover:shadow-lg rounded-md p-6 md:p-8 lg:p-8 mx-auto border border-[#FF3811]">
      <div className="relative h-[18rem]">
        <img src={thumbnail} className="h-[18rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
      </div>
      <h2 className="text-center mt-3  font-bold text-3xl text-[#FF3811]">
        {name}
      </h2>
      <form onSubmit={handleEnroll}>
        {/* name */}
      <div className="mt-2">
     <label className="text-[#FF3811] block  text-sm font-bold"> Name:
      </label>
      <input  type="text" 
      className="border border-[#FF3811] w-full p-2 text-gray-700 leading-tight focus:outline-none bg-transparent"
        placeholder="Your Name Please......"
        name="studentName"
       required
       />
     </div>
     {/* email */}
      <div className="mt-2">
     <label className="text-[#FF3811] block  text-sm font-bold"> Email:
      </label>
      <input  
      type="email" 
      className="border border-[#FF3811] w-full p-2 text-gray-700 leading-tight focus:outline-none bg-transparent"
        placeholder="Your Email Please......"
        name="email"
       required
       />
     </div>
        <input
          type="submit"
          className=" cursor-pointer hover: py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#FF3811] my-3 hover:shadow-xl hover:text-gray-200"
          value="Place Order"
        />
      </form>
    </div>
  )
}

export default EnrollNow