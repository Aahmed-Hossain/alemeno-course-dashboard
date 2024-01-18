import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const {
    _id,
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
            
          <span className="font-semibold text-xl">Pre-requisites : </span>
            <span className="tex-xl text-gray-600 flex flex-col gap-1">{prerequisites.map((item, index)=>(
              <p key={index}>{`${index + 1}. ${item}`}</p>
              ))}</span>
          </h3>
          <Link to={`/enrollNow/${_id}`} className="bg-red-200 shadow-md text-xl font-semibold rounded-md w-36 flex justify-center hover:shadow-lg hover:bg-red-300 p-1">Enroll Now
          </Link>
        </div>
      </div>
      <div>
          <h2 className="text-2xl font-semibold">Syllabus:</h2>
         {
          syllabus.map((item, idx) => (<p  key={idx} className="flex flex-col">
            <details>
              <summary>Week: {item.week} </summary>
              <p> Topic: {item.topic}</p>
              <p> Content: {item.content}</p>
            </details>
          </p>))
         }
      </div>
    </div>
  );
};

export default CourseDetails;
