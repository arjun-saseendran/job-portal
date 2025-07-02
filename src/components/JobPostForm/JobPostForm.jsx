import { useState } from "react";
import { jobList } from "../../data/jobs";

const now = new Date();
function generateId(length = 8) {
  return Math.random().toString(36).substr(2, length);
}

function getRelativeTime(date) {
  const secondsAgo = Math.floor((now - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let unit in intervals) {
    const value = Math.floor(secondsAgo / intervals[unit]);
    if (value >= 1) {
      return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export const JobPostForm = () => {
  const [jobData, setJobData] = useState({
    id: generateId(),
    title: "",
    company: "",
    location: "",
    type: "on site",
    logo: "",
    postedAgo: getRelativeTime(now),
    easyApply: false,
  });

  const handleJobPost = (jobData) => {
    jobList.push(jobData);
  };

  return (
    <div className="border rounded md:w-[500px] p-5 pb-10 shadow">
      <h1 className="text-center font-bold text-xl pb-4">Post Job</h1>
      <div className="flex flex-col gap-1">
        <input
          className="border rounded px-20 py-3 text-center"
          type="text"
          value={jobData?.title}
          placeholder="Title"
          onChange={(e) =>
            setJobData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          className="border rounded px-20 py-3 text-center"
          type="text"
          placeholder="Company"
          value={jobData?.company}
          onChange={(e) =>
            setJobData((prev) => ({ ...prev, company: e.target.value }))
          }
        />
        <input
          className="border rounded px-20 py-3 text-center"
          type="text"
          placeholder="Location"
          value={jobData?.location}
          onChange={(e) =>
            setJobData((prev) => ({ ...prev, location: e.target.value }))
          }
        />
        <div className="flex gap-2 w-full">
          <input
            className="border rounded px-20 py-3"
            type="radio"
            name="job"
            value="on site"
            checked={jobData?.type === "on site"}
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, type: e.target?.value }))
            }
          />
          <span>On Site</span>

          <input
            className="border rounded px-20 py-3"
            type="radio"
            name="job"
            value="remote"
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, type: e.target?.value }))
            }
          />
          <span>Remote</span>

          <input
            className="border rounded px-20 py-3"
            type="radio"
            name="job"
            value="hybrid"
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, type: e.target?.value }))
            }
          />
          <span>Hybrid</span>
        </div>
        <input
          className="border rounded px-20 py-3 text-center"
          type="text"
          placeholder="Logo Url"
          value={jobData?.logo}
          onChange={(e) =>
            setJobData((prev) => ({ ...prev, logo: e.target.value }))
          }
        />
        <div className="flex items-center gap-1">
          <span>Easy Apply</span>
          <input
            className="border rounded"
            checked={jobData?.easyApply}
            type="checkbox"
            onChange={(e) =>
              setJobData((prev) => ({ ...prev, easyApply: e.target.checked }))
            }
          />
        </div>
        <button
          onClick={() => {
            handleJobPost(jobData);

            setJobData({
              title: "",
              company: "",
              location: "",
              type: "on site",
              logo: "",
              easyApply: false
            });
          }}
          className="bg-blue-500 text-white w-1/2 mx-auto py-2 rounded hover:bg-opacity-90"
        >
          Post
        </button>
      </div>
    </div>
  );
};
