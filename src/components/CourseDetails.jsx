import { useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const {
    name,
    syllabus,
    location,
    prerequisites,
    schedule,
    duration,
    thumbnail,
    enrollmentStatus,
    description,
    instructor,
  } = singleCourse;
  return (
    <div className="w-11/12 mx-auto my-6">
      <h2 className="text-center font-bold text-3xl text-[#FF3811] ">{name}</h2>
      <div className="my-4 flex  gap-4">
        {/* left container with image*/}
        <div className="w-7/12">
          <img
            className="rounded-xl h-[23rem] w-full object-cover"
            src={thumbnail}
            alt=""
          />
      
        </div>
        {/* right container with text */}
        <div className="w-5/12 flex flex-col gap-3">
          <p className="text-gray-600">{description}</p>
          <h5 className="text-md font-semibold flex  gap-2">
            Location:
            {/* <p className="flex gap-1 items-center"><IoLocationOutline/> Location:</p> */}
            <span className="tex-xl text-[#FF3811]">{location}</span>
          </h5>
          <h3>
            
            Instructor:
            <span className="tex-xl text-[#FF3811]"> {instructor}</span>
          </h3>
          <h3 className="font-semibold">
            
            Enrollment status:
            <span className="tex-xl text-green-600"> {enrollmentStatus}</span>
          </h3>
          <h3>
            
            Course duration :
            <span className="tex-xl text-[#FF3811]"> {duration} Weeks</span>
          </h3>
          <h3>
            
          Schedule :
            <span className="tex-xl text-[#FF3811]"> {schedule}</span>
          </h3>
          <h3>
            
          Pre-requisites : 
            <span className="tex-xl text-gray-600 flex flex-col gap-2">{prerequisites.map((item, index)=>(
              <p key={index}>{item}</p>
              ))}</span>
          </h3>
          
        </div>
      </div>
      <h3>
          Syllabus :
            <span className="tex-xl text-">{syllabus.map()}</span>
          </h3>
    </div>
  );
};

export default CourseDetails;
