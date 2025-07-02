import { HiOutlineShieldCheck } from "react-icons/hi";

export const JobCard = ({ jobs }) => {
  return (
    <div className="border md:w-[500px]  rounded-md p-5">
      {jobs?.map((job) => (
        <div
          className="border pb-4 p-5 m-1 hover:bg-gray-50 cursor-pointer"
          key={job?.id}
        >
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-1">
              <img className="w-14" src={`${job?.logo}`} alt="company logo" />
            </div>
            <div>
              <h1 className="text-blue-600 font-bold flex gap-1 items-center">
                {job?.title}
                <HiOutlineShieldCheck className="text-gray-600" />
              </h1>{" "}
              <p className="text-sm">
                {job?.company} • {job?.location} ({job?.type})
              </p>
              <p className="text-xs text-gray-500">{job?.postedAgo}</p>
              <p className="text-xs font-bold cursor-pointer hover:text-blue-600 text-blue-500">
                {job?.easyApply && <span>Easy Apply</span>}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
