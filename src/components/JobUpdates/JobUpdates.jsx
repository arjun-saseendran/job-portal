

export const JobUpdates = () => {
  const jobs = [
    {
      id: 1,
      title: "React Developer at TechNova",
      time: "2h ago",
      meta: "120 applicants",
    },
    {
      id: 2,
      title: "Backend Engineer at CloudWorks",
      time: "5h ago",
      meta: "Remote • 98 applicants",
    },
    {
      id: 3,
      title: "UI/UX Designer at PixelCraft",
      time: "8h ago",
      meta: "Bangalore • 76 applicants",
    },
    {
      id: 4,
      title: "Full Stack Developer at AppCore",
      time: "1d ago",
      meta: "Chennai • 54 applicants",
    },
    {
      id: 5,
      title: "Product Manager at FinEdge",
      time: "1d ago",
      meta: "Mumbai • 31 applicants",
    },
    {
      id: 6,
      title: "MERN Stack Developer at Google ",
      time: "7d ago",
      meta: "Goa • 1008 applicants",
    },
  ];

  return (
    <div className="p-3 rounded-md border w-72 h-96">
      <h1 className="font-bold text-md">Job Updates

      </h1>
      {jobs?.map((job) => (
        <div className="py-2 hover:bg-gray-100 p-1 rounded-md cursor-pointer" key={job?.id}>
          <h1>{job?.title}</h1>
          <p className="text-xs text-gray-500">
            {job?.time} . {job?.meta}
          </p>
        </div>
      ))}
    </div>
  );
};
